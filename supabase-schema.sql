create table if not exists public.experiment_sessions (
  session_id uuid primary key default gen_random_uuid(),
  participant_id text not null,
  age smallint not null check (age between 1 and 120),
  gender text not null check (gender in ('female', 'male', 'nonbinary')),
  education text not null check (
    education in (
      'high_school_or_less',
      'associate',
      'bachelor',
      'master',
      'doctorate'
    )
  ),
  handedness text not null check (
    handedness in ('right', 'left', 'ambidextrous')
  ),
  language text not null check (language in ('fa', 'en')),
  demographics_recorded_at timestamptz,
  mode text not null check (mode in ('standard', 'advanced')),
  started_at timestamptz,
  completed_at timestamptz not null default now(),

  normal_hit smallint not null,
  normal_miss smallint not null,
  normal_false_alarm smallint not null,
  normal_correct_rejection smallint not null,
  normal_hit_rate double precision not null,
  normal_fa_rate double precision not null,
  normal_d_prime double precision not null,
  normal_c double precision not null,
  normal_avg_rt_ms double precision not null,
  normal_boundary_correction boolean not null,

  reward_hit smallint not null,
  reward_miss smallint not null,
  reward_false_alarm smallint not null,
  reward_correct_rejection smallint not null,
  reward_hit_rate double precision not null,
  reward_fa_rate double precision not null,
  reward_d_prime double precision not null,
  reward_c double precision not null,
  reward_avg_rt_ms double precision not null,
  reward_boundary_correction boolean not null,

  delta_c double precision not null,
  delta_d_prime double precision not null,
  delta_hit_rate double precision not null,
  delta_fa_rate double precision not null,
  reward_score smallint not null
);

create table if not exists public.experiment_trials (
  session_id uuid not null references public.experiment_sessions(session_id) on delete cascade,
  block text not null check (block in ('Normal', 'Reward')),
  trial smallint not null check (trial > 0),
  shape text not null check (shape in ('circle', 'square', 'triangle')),
  signal_present boolean not null,
  response_yes boolean not null,
  outcome text not null check (
    outcome in ('Hit', 'Miss', 'False Alarm', 'Correct Rejection')
  ),
  rt_ms integer not null check (rt_ms >= 0),
  score_delta smallint not null check (score_delta in (-1, 0, 1)),
  primary key (session_id, block, trial)
);

alter table public.experiment_sessions enable row level security;
alter table public.experiment_trials enable row level security;

revoke all on public.experiment_sessions from anon, authenticated;
revoke all on public.experiment_trials from anon, authenticated;

create or replace function public.submit_experiment(p_payload jsonb)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_session_id uuid := gen_random_uuid();
  v_trial jsonb;
begin
  if p_payload is null
     or jsonb_typeof(p_payload) <> 'object'
     or jsonb_typeof(p_payload -> 'demographics') <> 'object'
     or jsonb_typeof(p_payload -> 'experiment') <> 'object'
     or jsonb_typeof(p_payload -> 'trials') <> 'array' then
    raise exception 'Invalid experiment payload';
  end if;

  insert into public.experiment_sessions (
    session_id,
    participant_id,
    age,
    gender,
    education,
    handedness,
    language,
    demographics_recorded_at,
    mode,
    started_at,
    completed_at,

    normal_hit,
    normal_miss,
    normal_false_alarm,
    normal_correct_rejection,
    normal_hit_rate,
    normal_fa_rate,
    normal_d_prime,
    normal_c,
    normal_avg_rt_ms,
    normal_boundary_correction,

    reward_hit,
    reward_miss,
    reward_false_alarm,
    reward_correct_rejection,
    reward_hit_rate,
    reward_fa_rate,
    reward_d_prime,
    reward_c,
    reward_avg_rt_ms,
    reward_boundary_correction,

    delta_c,
    delta_d_prime,
    delta_hit_rate,
    delta_fa_rate,
    reward_score
  )
  values (
    v_session_id,
    p_payload ->> 'participant_id',
    (p_payload #>> '{demographics,age}')::smallint,
    p_payload #>> '{demographics,gender}',
    p_payload #>> '{demographics,education}',
    p_payload #>> '{demographics,handedness}',
    p_payload #>> '{demographics,language}',
    nullif(p_payload #>> '{demographics,recorded_at}', '')::timestamptz,
    p_payload #>> '{experiment,mode}',
    nullif(p_payload #>> '{experiment,started_at}', '')::timestamptz,
    coalesce(
      nullif(p_payload #>> '{experiment,completed_at}', '')::timestamptz,
      now()
    ),

    (p_payload #>> '{experiment,normal,hit}')::smallint,
    (p_payload #>> '{experiment,normal,miss}')::smallint,
    (p_payload #>> '{experiment,normal,false_alarm}')::smallint,
    (p_payload #>> '{experiment,normal,correct_rejection}')::smallint,
    (p_payload #>> '{experiment,normal,hit_rate}')::double precision,
    (p_payload #>> '{experiment,normal,fa_rate}')::double precision,
    (p_payload #>> '{experiment,normal,d_prime}')::double precision,
    (p_payload #>> '{experiment,normal,criterion_c}')::double precision,
    (p_payload #>> '{experiment,normal,avg_rt_ms}')::double precision,
    (p_payload #>> '{experiment,normal,boundary_correction}')::boolean,

    (p_payload #>> '{experiment,reward,hit}')::smallint,
    (p_payload #>> '{experiment,reward,miss}')::smallint,
    (p_payload #>> '{experiment,reward,false_alarm}')::smallint,
    (p_payload #>> '{experiment,reward,correct_rejection}')::smallint,
    (p_payload #>> '{experiment,reward,hit_rate}')::double precision,
    (p_payload #>> '{experiment,reward,fa_rate}')::double precision,
    (p_payload #>> '{experiment,reward,d_prime}')::double precision,
    (p_payload #>> '{experiment,reward,criterion_c}')::double precision,
    (p_payload #>> '{experiment,reward,avg_rt_ms}')::double precision,
    (p_payload #>> '{experiment,reward,boundary_correction}')::boolean,

    (p_payload #>> '{experiment,delta_c}')::double precision,
    (p_payload #>> '{experiment,delta_d_prime}')::double precision,
    (p_payload #>> '{experiment,delta_hit_rate}')::double precision,
    (p_payload #>> '{experiment,delta_fa_rate}')::double precision,
    (p_payload #>> '{experiment,reward_score}')::smallint
  );

  for v_trial in
    select value
    from jsonb_array_elements(p_payload -> 'trials')
  loop
    insert into public.experiment_trials (
      session_id,
      block,
      trial,
      shape,
      signal_present,
      response_yes,
      outcome,
      rt_ms,
      score_delta
    )
    values (
      v_session_id,
      v_trial ->> 'block',
      (v_trial ->> 'trial')::smallint,
      v_trial ->> 'shape',
      (v_trial ->> 'signal_present')::boolean,
      (v_trial ->> 'response_yes')::boolean,
      v_trial ->> 'outcome',
      (v_trial ->> 'rt_ms')::integer,
      (v_trial ->> 'score_delta')::smallint
    );
  end loop;

  return v_session_id;
end;
$$;

revoke execute on function public.submit_experiment(jsonb) from public;
revoke execute on function public.submit_experiment(jsonb) from authenticated;
grant execute on function public.submit_experiment(jsonb) to anon;
