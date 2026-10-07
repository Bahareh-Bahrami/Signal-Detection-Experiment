(() => {
        const translations = {
          fa: {
            documentTitle: "Signal Detection Lab | Signal or Noise?",
            demographicsKicker: "اطلاعات اولیه",
            demographicsIntro:
              "پیش از شروع آزمایش، لطفا چند سؤال کوتاه را پاسخ دهید.",
            ageLabel: "سن",
            agePlaceholder: "مثلاً ۳۰",
            genderLabel: "جنسیت",
            selectPlaceholder: "انتخاب کنید",
            genderFemale: "زن",
            genderMale: "مرد",
            genderNonbinary: "غیردوگانه",
            educationLabel: "سطح تحصیلات",
            educationHighSchool: "دیپلم یا پایین‌تر",
            educationAssociate: "کاردانی",
            educationBachelor: "کارشناسی",
            educationMaster: "کارشناسی ارشد",
            educationDoctorate: "دکتری",
            handednessLabel: "دست برتر",
            rightHanded: "راست‌دست",
            leftHanded: "چپ‌دست",
            ambidextrous: "دودست",
            continueToExperiment: "ادامه",
            demographicsRequired: "لطفاً همه فیلدها را تکمیل کنید.",
            ageInvalid: "لطفاً یک سن معتبر بین ۱ تا ۱۲۰ وارد کنید.",
            introTitle: "آزمایش تشخیص سیگنال",
            introBody:
              'در هر کوشش یک شبکه ۶×۶ از دایره‌ها می‌بینید، تشخیص دهید آیا یک دایره شکسته در تصویر وجود دارد یا نه.',
            introStructure:
              "ابتدا ۴ کوشش تمرین آزمایشی انجام می‌دهید. سپس دو مرحله‌ی ۱۰ کوششی خواهید داشت.",
            startAdvanced: "نسخه پیشرفته",
            advancedFromResults: "نسخه پیشرفته",
            standardFromResults: "اجرای آزمون ساده‌تر",
            advancedQuestion: "آیا شکل شکسته‌ای وجود داشت؟",
            advancedReadyBody:
              "تمرین نسخه پیشرفته تمام شد. در آزمون اصلی، دایره‌ها، مربع‌ها و مثلث‌ها به‌صورت ترکیبی نمایش داده می‌شوند. وقتی آماده بودید، مرحله اول را شروع کنید.",
            advancedRewardIntro:
              "در مرحله دوم نسخه پیشرفته، فقط پاسخ «بله» روی امتیاز شما اثر می‌گذارد:",
            advancedRewardRuleGain:
              "اگر درست تشخیص دهید که یک شکل شکسته وجود دارد، ۱ امتیاز می‌گیرید.",
            advancedRewardRuleLoss:
              "اگر به اشتباه فکر کنید یک شکل شکسته وجود دارد، ۱ امتیاز از دست می‌دهید.",
            advancedSignalPresent: "شکل شکسته وجود داشت",
            advancedSignalAbsent: "شکل شکسته وجود نداشت",
            introNote:
              "در یک دستگاه و با فاصله و روشنایی ثابت انجام دهید.<br>تصویر فقط حدود ۱ ثانیه نمایش داده می‌شود.",
            startPractice: "شروع تمرین",
            question: "آیا دایره‌ی شکسته وجود داشت؟",
            yes: "بله",
            no: "خیر",
                        practiceDone: "تمرین تمام شد",
            readyBody:
              "حالا با روند کار آشنا هستید. در آزمون اصلی بازخوردی دریافت نمی‌کنید.<br>وقتی آماده بودید، آزمون اصلی را شروع کنید.",
                        startMain: "شروع آزمون اصلی",
            normalDone: "مرحله اول تمام شد",
            rewardIntro:
              "در مرحله دوم، فقط پاسخ «بله» روی امتیاز شما اثر می‌گذارد:",
            rewardRuleGain:
              "اگر درست تشخیص دهید که دایره‌ی شکسته وجود دارد، ۱ امتیاز می‌گیرید.",
            rewardRuleLoss:
              "اگر به اشتباه فکر کنید دایره‌ی شکسته وجود دارد، ۱ امتیاز از دست می‌دهید.",
            rewardGoal:
              '<b>هدف:</b> تا پایان این مرحله بیشترین امتیاز ممکن را کسب کنید. پاسخ صحیح و امتیاز فعلی در طول آزمون نمایش داده نمی‌شود.',
            startReward: "شروع مرحله دوم",
            resultsTitle: "نتایج",
            criterionCard: "معیار تصمیم (c)",
            sensitivityCard: "حساسیت ادراکی (d′)",
            scoreCard: "امتیاز مرحله دوم",
            scoreScale: "حداکثر ممکن: ۵",
            comparisonTitle: "تغییرات مرحله دوم نسبت به مرحله اول",
            hitRateLabel: "نرخ تشخیص درست",
            faRateLabel: "درصد پاسخ «بله» اشتباه",
            rtLabel: "میانگین زمان پاسخ",
            detailsSummary: "مشاهده جزئیات محاسبات",
            boundaryNote:
              "اگر H یا F دقیقاً ۰ یا ۱ باشد، برای محاسبه Z از اصلاح مرزی 0.5/N استفاده شده است تا d′ و c نامتناهی نشوند. نرخ خام در جدول حفظ می‌شود.",
            downloadTrials: "دانلود داده‌های trial-by-trial",
            downloadSummary: "دانلود خلاصه محاسبات",
            restart: "شروع دوباره آزمایش",
            practice: "تمرین",
            normal: "مرحله اول",
            reward: "مرحله دوم",
            trialOf: (n, total) => `کوشش ${n} از ${total}`,
            practiceCorrect: "✓ درست",
            practiceIncorrect: "✕ نادرست",
            normalTable: "مرحله اول",
            rewardTable: "مرحله دوم",
            signalPresent: "دایره شکسته وجود داشت",
            signalAbsent: "دایره شکسته وجود نداشت",
            respondYes: "پاسخ «بله»",
            respondNo: "پاسخ «خیر»",
            heroConservative:
              "در مرحله دوم، معیار تصمیم شما محافظه‌کارانه‌تر شد.",
            heroLiberal:
              "در مرحله دوم، معیار تصمیم شما کمی لیبرال‌تر شد.",
            heroStable:
              "معیار تصمیم شما بین دو مرحله تقریباً بدون تغییر ماند.",
            heroConservativeBody:
              "یعنی در مرحله دوم برای پاسخ «بله» به شواهد بیشتری نیاز داشتید.",
            heroLiberalBody:
              "یعنی در مرحله دوم آمادگی بیشتری برای پاسخ «بله» نشان دادید.",
            heroStableBody:
              "یعنی شیوه‌ی تصمیم‌گیری شما در دو مرحله بسیار مشابه بود.",
            increased: (d) => `افزایش ${d}`,
            decreased: (d) => `کاهش ${d}`,
            unchanged: "تقریباً بدون تغییر",
            faster: (ms) => `${ms} ms سریع‌تر`,
            slower: (ms) => `${ms} ms کندتر`,
            rtSame: "تقریباً بدون تغییر",
          },

          en: {
            documentTitle: "Signal Detection Lab | Signal or Noise?",
            demographicsKicker: "Participant information",
            demographicsIntro:
              "Before starting the experiment, please answer a few short questions.",
            ageLabel: "Age",
            agePlaceholder: "e.g. 30",
            genderLabel: "Gender",
            selectPlaceholder: "Select an option",
            genderFemale: "Woman",
            genderMale: "Man",
            genderNonbinary: "Non-binary",
            educationLabel: "Education level",
            educationHighSchool: "High school or below",
            educationAssociate: "Associate degree / diploma",
            educationBachelor: "Bachelor’s degree",
            educationMaster: "Master’s degree",
            educationDoctorate: "Doctorate",
            handednessLabel: "Handedness",
            rightHanded: "Right-handed",
            leftHanded: "Left-handed",
            ambidextrous: "Ambidextrous",
            continueToExperiment: "Continue",
            demographicsRequired: "Please complete all fields.",
            ageInvalid: "Please enter a valid age between 1 and 120.",
            introTitle: "Signal Detection Experiment",
            introBody:
              'On each trial, you will see a 6×6 grid of circles. Decide whether a broken circle is present in the image.',
            introStructure:
              "You will begin with 4 practice trials, followed by two 10-trial blocks.",
            startAdvanced: "Advanced version",
            advancedFromResults: "Advanced version",
            standardFromResults: "Run easier version",
            advancedQuestion: "Was there a broken shape?",
            advancedReadyBody:
              "Advanced practice is complete. In the main experiment, circles, squares, and triangles will be mixed across trials. Start the first block when you are ready.",
            advancedRewardIntro:
              "In the second advanced block, only “Yes” responses affect your score:",
            advancedRewardRuleGain:
              "If you correctly detect that a broken shape is present, you gain 1 point.",
            advancedRewardRuleLoss:
              "If you incorrectly think a broken shape is present, you lose 1 point.",
            advancedSignalPresent: "Broken shape present",
            advancedSignalAbsent: "Broken shape absent",
            introNote:
              "Use the same device and keep viewing distance and brightness as constant as possible. The image is shown for about 1 second.",
            startPractice: "Start practice",
            question: "Was there a broken circle?",
            yes: "Yes",
            no: "No",
                        practiceDone: "Practice complete",
            readyBody:
              "You are now familiar with the task. During the main experiment, you will not receive feedback after each response. Start when you feel ready.",
                        startMain: "Start main experiment",
            normalDone: "First block complete",
            rewardIntro:
              "In the second block, only “Yes” responses affect your score:",
            rewardRuleGain:
              "If you correctly detect that a broken circle is present, you gain 1 point.",
            rewardRuleLoss:
              "If you incorrectly think a broken circle is present, you lose 1 point.",
            rewardGoal:
              '<b>Goal:</b> Earn the highest possible score by the end of this block. The correct answer and your running score will not be shown during the task.',
            startReward: "Start second block",
            resultsTitle: "Results",
            criterionCard: "Decision criterion (c)",
            sensitivityCard: "Perceptual sensitivity (d′)",
            scoreCard: "Second-block score",
            scoreScale: "Maximum possible: 5",
            comparisonTitle: "How the second block changed relative to the first",
            hitRateLabel: "Correct detection rate",
            faRateLabel: "Incorrect “Yes” response rate",
            rtLabel: "Mean response time",
            detailsSummary: "View detailed calculations",
            boundaryNote:
              "If H or F is exactly 0 or 1, a 0.5/N boundary correction is used for the Z transformation so that d′ and c remain finite. Raw rates are still shown in the table.",
            downloadTrials: "Download trial-by-trial data",
            downloadSummary: "Download summary calculations",
            restart: "Restart experiment",
            practice: "Practice",
            normal: "First block",
            reward: "Second block",
            trialOf: (n, total) => `Trial ${n} of ${total}`,
            practiceCorrect: "✓ Correct",
            practiceIncorrect: "✕ Incorrect",
            normalTable: "First block",
            rewardTable: "Second block",
            signalPresent: "Broken circle present",
            signalAbsent: "Broken circle absent",
            respondYes: "Respond Yes",
            respondNo: "Respond No",
            heroConservative:
              "Your decision criterion became more conservative in the second block.",
            heroLiberal:
              "Your decision criterion became slightly more liberal in the second block.",
            heroStable:
              "Your decision criterion stayed nearly the same across the two blocks.",
            heroConservativeBody:
              "This means you required stronger evidence before responding “Yes” in the second block.",
            heroLiberalBody:
              "This means you were somewhat more willing to respond “Yes” in the second block.",
            heroStableBody:
              "This means your response strategy was very similar across the two blocks.",
            increased: (d) => `increased by ${d}`,
            decreased: (d) => `decreased by ${d}`,
            unchanged: "almost unchanged",
            faster: (ms) => `${ms} ms faster`,
            slower: (ms) => `${ms} ms slower`,
            rtSame: "almost unchanged",
          },
        };

        const FIX = 500;
        const STIM = 1000;
        const G = 6;

        function q(id) {
          return document.getElementById(id);
        }

        function shuffled(items) {
          const a = [...items];
          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        }

        function standardBlock(name) {
          const a = [];
          for (let i = 0; i < 5; i++) a.push({ s: 1, b: name, shape: "circle" });
          for (let i = 0; i < 5; i++) a.push({ s: 0, b: name, shape: "circle" });
          return shuffled(a);
        }

        function advancedBlock(name) {
          const a = [];
          const composition = {
            circle: [1, 1, 1, 0, 0],
            square: [1, 1, 1, 0, 0],
            triangle: [1, 1, 0, 0, 0],
          };

          Object.entries(composition).forEach(([shape, signals]) => {
            signals.forEach((s) => a.push({ s, b: name, shape }));
          });

          return shuffled(a);
        }

        function buildPractice(mode) {
          if (mode === "advanced") {
            return shuffled([
              { s: 1, b: "Practice", shape: "circle" },
              { s: 0, b: "Practice", shape: "square" },
              { s: 1, b: "Practice", shape: "triangle" },
              { s: 0, b: "Practice", shape: "circle" },
            ]);
          }

          return shuffled([
            { s: 1, b: "Practice", shape: "circle" },
            { s: 0, b: "Practice", shape: "circle" },
            { s: 1, b: "Practice", shape: "circle" },
            { s: 0, b: "Practice", shape: "circle" },
          ]);
        }

        function buildMainBlock(name, mode) {
          return mode === "advanced"
            ? advancedBlock(name)
            : standardBlock(name);
        }

        let experimentMode = "standard";
        let practice = buildPractice(experimentMode);
        let normal = buildMainBlock("Normal", experimentMode);
        let reward = buildMainBlock("Reward", experimentMode);

        let currentLanguage = "fa";
        let phase = "practice";
        let arr = practice;
        let i = 0;
        let data = [];
        let t0 = 0;
        let summary = null;
        let demographicData = null;

        const demographics = q("demographics");
        const demographicsForm = q("demographicsForm");
        const demographicError = q("demographicError");
        const intro = q("intro");
        const task = q("task");
        const ready = q("ready");
        const brk = q("brk");
        const res = q("res");
        const fix = q("fix");
        const cv = q("cv");
        const ask = q("ask");
        const prog = q("prog");
        const progressFill = q("progressFill");
        const practiceFeedback = q("practiceFeedback");
        const ctx = cv.getContext("2d");

        try {
          const savedDemographics = sessionStorage.getItem("sdt_demographics");
          if (savedDemographics) demographicData = JSON.parse(savedDemographics);
        } catch {
          sessionStorage.removeItem("sdt_demographics");
        }

        function applyLanguage(lang) {
          currentLanguage = lang;
          const t = translations[lang];

          document.documentElement.lang = lang;
          document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
          document.title = t.documentTitle;

          document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (typeof t[key] === "string") el.textContent = t[key];
          });

          document.querySelectorAll("[data-i18n-html]").forEach((el) => {
            const key = el.dataset.i18nHtml;
            if (typeof t[key] === "string") el.innerHTML = t[key];
          });

          document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.dataset.i18nPlaceholder;
            if (typeof t[key] === "string") el.placeholder = t[key];
          });

          q("langFa").classList.toggle("active", lang === "fa");
          q("langEn").classList.toggle("active", lang === "en");

          if (demographicData) {
            demographicData.language = lang;
            sessionStorage.setItem(
              "sdt_demographics",
              JSON.stringify(demographicData),
            );
          }

          updateModeText();
          if (!task.classList.contains("hidden")) updateProgress();
          if (summary) renderResults(summary);
        }

        function updateModeText() {
          const t = translations[currentLanguage];
          const advanced = experimentMode === "advanced";

          q("ask").querySelector("[data-i18n=\"question\"]").textContent = advanced ? t.advancedQuestion : t.question;
          q("ready").querySelector("[data-i18n-html='readyBody']").innerHTML =
            advanced ? t.advancedReadyBody : t.readyBody;
          q("brk").querySelector("[data-i18n='rewardIntro']").textContent =
            advanced ? t.advancedRewardIntro : t.rewardIntro;
          q("brk").querySelector("[data-i18n='rewardRuleGain']").textContent =
            advanced ? t.advancedRewardRuleGain : t.rewardRuleGain;
          q("brk").querySelector("[data-i18n='rewardRuleLoss']").textContent =
            advanced ? t.advancedRewardRuleLoss : t.rewardRuleLoss;

          q("advancedFromResults").textContent =
            advanced ? t.standardFromResults : t.advancedFromResults;
        }

        function resetExperiment(mode) {
          experimentMode = mode;
          phase = "practice";
          i = 0;
          data = [];
          summary = null;

          practice = buildPractice(mode);
          normal = buildMainBlock("Normal", mode);
          reward = buildMainBlock("Reward", mode);
          arr = practice;

          intro.classList.add("hidden");
          ready.classList.add("hidden");
          brk.classList.add("hidden");
          res.classList.add("hidden");
          task.classList.remove("hidden");
          practiceFeedback.classList.add("hidden");
          practiceFeedback.classList.remove("correct", "incorrect");

          updateModeText();
          run();
        }

        function createParticipantId() {
          if (window.crypto && typeof window.crypto.randomUUID === "function") {
            return `P_${window.crypto.randomUUID().replace(/-/g, "").slice(0, 12)}`;
          }

          return `P_${Date.now().toString(36)}${Math.random()
            .toString(36)
            .slice(2, 8)}`;
        }

        function getParticipantId() {
          let id = sessionStorage.getItem("sdt_participant_id");
          if (!id) {
            id = createParticipantId();
            sessionStorage.setItem("sdt_participant_id", id);
          }
          return id;
        }

        function restoreDemographicsForm() {
          const saved = sessionStorage.getItem("sdt_demographics");
          if (!saved) return;

          try {
            const values = JSON.parse(saved);
            q("age").value = values.age ?? "";
            q("gender").value = values.gender ?? "";
            q("education").value = values.education ?? "";
            q("handedness").value = values.handedness ?? "";
          } catch {
            sessionStorage.removeItem("sdt_demographics");
          }
        }

        function chooseLanguage(lang) {
          applyLanguage(lang);
          q("languageGate").classList.add("hidden");
          q("topbar").classList.remove("hidden");
          intro.classList.add("hidden");
          demographics.classList.remove("hidden");
          restoreDemographicsForm();
        }

        demographicsForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const t = translations[currentLanguage];
          const age = Number(q("age").value);
          const gender = q("gender").value;
          const education = q("education").value;
          const handedness = q("handedness").value;

          demographicError.classList.add("hidden");
          demographicError.textContent = "";

          if (!Number.isFinite(age) || age < 1 || age > 120) {
            demographicError.textContent = t.ageInvalid;
            demographicError.classList.remove("hidden");
            q("age").focus();
            return;
          }

          if (!gender || !education || !handedness) {
            demographicError.textContent = t.demographicsRequired;
            demographicError.classList.remove("hidden");
            return;
          }

          demographicData = {
            participant_id: getParticipantId(),
            age,
            gender,
            education,
            handedness,
            language: currentLanguage,
            created_at: new Date().toISOString(),
          };

          sessionStorage.setItem(
            "sdt_demographics",
            JSON.stringify(demographicData),
          );

          demographics.classList.add("hidden");
          intro.classList.remove("hidden");
        });

        q("chooseFa").onclick = () => chooseLanguage("fa");
        q("chooseEn").onclick = () => chooseLanguage("en");
        q("langFa").onclick = () => applyLanguage("fa");
        q("langEn").onclick = () => applyLanguage("en");

        q("startPractice").onclick = () => resetExperiment("standard");
        q("startAdvanced").onclick = () => resetExperiment("advanced");
        q("advancedFromResults").onclick = () =>
          resetExperiment(experimentMode === "advanced" ? "standard" : "advanced");

        q("startMain").onclick = () => {
          ready.classList.add("hidden");
          task.classList.remove("hidden");
          phase = "normal";
          arr = normal;
          i = 0;
          run();
        };

        q("startReward").onclick = () => {
          brk.classList.add("hidden");
          task.classList.remove("hidden");
          phase = "reward";
          arr = reward;
          i = 0;
          run();
        };

        q("restart").onclick = () => window.location.reload();

        document
          .querySelectorAll(".resp")
          .forEach((b) => (b.onclick = () => respond(+b.dataset.r)));

        document.addEventListener("keydown", (e) => {
          if (!ask.classList.contains("hidden")) {
            if (e.key.toLowerCase() === "y") respond(1);
            if (e.key.toLowerCase() === "n") respond(0);
          }
        });

        function phaseLabel() {
          const t = translations[currentLanguage];
          if (phase === "practice") return t.practice;
          if (phase === "normal") return t.normal;
          return t.reward;
        }

        function updateProgress() {
          const t = translations[currentLanguage];
          prog.textContent = `${phaseLabel()} | ${t.trialOf(i + 1, arr.length)}`;
          progressFill.style.width = `${((i + 1) / arr.length) * 100}%`;
        }

        function run() {
          ask.classList.add("hidden");
          cv.classList.add("hidden");
          fix.classList.remove("hidden");
          practiceFeedback.classList.add("hidden");
          practiceFeedback.classList.remove("correct", "incorrect");
          updateProgress();

          setTimeout(() => {
            fix.classList.add("hidden");
            draw(arr[i]);
            cv.classList.remove("hidden");

            setTimeout(() => {
              cv.classList.add("hidden");
              ask.classList.remove("hidden");
              t0 = performance.now();
            }, STIM);
          }, FIX);
        }

        function draw(tr) {
          ctx.clearRect(0, 0, 560, 560);
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, 560, 560);
          ctx.strokeStyle = "#111";
          ctx.lineWidth = 3;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          const margin = 70;
          const step = (560 - 2 * margin) / (G - 1);
          const size = 16;

          let rr = -1;
          let cc = -1;
          let brokenEdge = 0;
          let ang = 0;

          if (tr.s) {
            rr = Math.floor(Math.random() * G);
            cc = Math.floor(Math.random() * G);
            brokenEdge = Math.floor(Math.random() * 3);
            ang = Math.random() * Math.PI * 2;
          }

          for (let r = 0; r < G; r++) {
            for (let c = 0; c < G; c++) {
              const x = margin + c * step;
              const y = margin + r * step;
              const isBroken = tr.s && r === rr && c === cc;

              if (tr.shape === "square") {
                drawPolygon(squarePoints(x, y, size), isBroken ? brokenEdge % 4 : -1);
              } else if (tr.shape === "triangle") {
                drawPolygon(trianglePoints(x, y, size + 2), isBroken ? brokenEdge % 3 : -1);
              } else {
                drawCircle(x, y, size, isBroken, ang);
              }
            }
          }
        }

        function drawCircle(x, y, radius, isBroken, angle) {
          ctx.beginPath();
          if (isBroken) {
            const gap = (32 * Math.PI) / 180;
            ctx.arc(
              x,
              y,
              radius,
              angle + gap / 2,
              angle - gap / 2 + 2 * Math.PI,
            );
          } else {
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
          }
          ctx.stroke();
        }

        function squarePoints(x, y, half) {
          return [
            [x - half, y - half],
            [x + half, y - half],
            [x + half, y + half],
            [x - half, y + half],
          ];
        }

        function trianglePoints(x, y, radius) {
          return [-Math.PI / 2, -Math.PI / 2 + (2 * Math.PI) / 3, -Math.PI / 2 + (4 * Math.PI) / 3]
            .map((a) => [x + Math.cos(a) * radius, y + Math.sin(a) * radius]);
        }

        function drawPolygon(points, brokenEdge = -1) {
          const n = points.length;

          for (let edge = 0; edge < n; edge++) {
            const a = points[edge];
            const b = points[(edge + 1) % n];

            if (edge !== brokenEdge) {
              ctx.beginPath();
              ctx.moveTo(a[0], a[1]);
              ctx.lineTo(b[0], b[1]);
              ctx.stroke();
              continue;
            }

            const p1 = [
              a[0] + (b[0] - a[0]) * 0.37,
              a[1] + (b[1] - a[1]) * 0.37,
            ];
            const p2 = [
              a[0] + (b[0] - a[0]) * 0.63,
              a[1] + (b[1] - a[1]) * 0.63,
            ];

            ctx.beginPath();
            ctx.moveTo(a[0], a[1]);
            ctx.lineTo(p1[0], p1[1]);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(p2[0], p2[1]);
            ctx.lineTo(b[0], b[1]);
            ctx.stroke();
          }
        }

        function outcome(s, y) {
          if (s && y) return "Hit";
          if (s && !y) return "Miss";
          if (!s && y) return "False Alarm";
          return "Correct Rejection";
        }

        function respond(y) {
          if (ask.classList.contains("hidden")) return;
          ask.classList.add("hidden");

          const tr = arr[i];
          const out = outcome(tr.s, y);
          const blockName =
            phase === "practice"
              ? "Practice"
              : phase === "normal"
                ? "Normal"
                : "Reward";

          const scoreDelta =
            blockName === "Reward"
              ? out === "Hit"
                ? 1
                : out === "False Alarm"
                  ? -1
                  : 0
              : 0;

          data.push({
            mode: experimentMode,
            block: blockName,
            trial: i + 1,
            shape: tr.shape,
            signal: tr.s,
            response: y,
            outcome: out,
            rt: Math.round(performance.now() - t0),
            score: scoreDelta,
          });

          if (phase === "practice") {
            const t = translations[currentLanguage];
            const correct = tr.s === y;

            cv.classList.add("hidden");
            ask.classList.add("hidden");
            fix.classList.add("hidden");

            practiceFeedback.textContent =
              correct ? t.practiceCorrect : t.practiceIncorrect;
            practiceFeedback.classList.remove("hidden");
            practiceFeedback.classList.toggle("correct", correct);
            practiceFeedback.classList.toggle("incorrect", !correct);

            setTimeout(next, 850);
          } else {
            setTimeout(next, 120);
          }
        }

        function next() {
          i++;

          if (i < arr.length) {
            run();
            return;
          }

          task.classList.add("hidden");
          progressFill.style.width = "0%";

          if (phase === "practice") {
            updateModeText();
            ready.classList.remove("hidden");
            return;
          }

          if (phase === "normal") {
            updateModeText();
            brk.classList.remove("hidden");
            return;
          }

          show();
        }

        function inv(p) {
          const a = [
            -39.69683028665376,
            220.9460984245205,
            -275.9285104469687,
            138.357751867269,
            -30.66479806614716,
            2.506628277459239,
          ];
          const b = [
            -54.47609879822406,
            161.5858368580409,
            -155.6989798598866,
            66.80131188771972,
            -13.28068155288572,
          ];
          const c = [
            -0.007784894002430293,
            -0.3223964580411365,
            -2.400758277161838,
            -2.549732539343734,
            4.374664141464968,
            2.938163982698783,
          ];
          const d = [
            0.007784695709041462,
            0.3224671290700398,
            2.445134137142996,
            3.754408661907416,
          ];
          const pl = 0.02425;
          const ph = 1 - pl;
          let qv;
          let rv;

          if (p < pl) {
            qv = Math.sqrt(-2 * Math.log(p));
            return (
              (((((c[0] * qv + c[1]) * qv + c[2]) * qv + c[3]) * qv + c[4]) *
                qv +
                c[5]) /
              ((((d[0] * qv + d[1]) * qv + d[2]) * qv + d[3]) * qv + 1)
            );
          }

          if (p > ph) {
            qv = Math.sqrt(-2 * Math.log(1 - p));
            return (
              -(
                ((((c[0] * qv + c[1]) * qv + c[2]) * qv + c[3]) * qv + c[4]) *
                  qv +
                c[5]
              ) /
              ((((d[0] * qv + d[1]) * qv + d[2]) * qv + d[3]) * qv + 1)
            );
          }

          qv = p - 0.5;
          rv = qv * qv;

          return (
            ((((((a[0] * rv + a[1]) * rv + a[2]) * rv + a[3]) * rv + a[4]) *
              rv +
              a[5]) *
              qv) /
            (((((b[0] * rv + b[1]) * rv + b[2]) * rv + b[3]) * rv + b[4]) *
              rv +
              1)
          );
        }

        function met(blockName) {
          const dta = data.filter((x) => x.block === blockName);
          const h = dta.filter((x) => x.outcome === "Hit").length;
          const m = dta.filter((x) => x.outcome === "Miss").length;
          const fa = dta.filter((x) => x.outcome === "False Alarm").length;
          const cr = dta.filter((x) => x.outcome === "Correct Rejection").length;

          const nS = h + m;
          const nN = fa + cr;
          const H = h / nS;
          const F = fa / nN;

          let Hz = H;
          let Fz = F;
          let corr = false;

          if (H === 1) {
            Hz = 1 - 0.5 / nS;
            corr = true;
          }
          if (H === 0) {
            Hz = 0.5 / nS;
            corr = true;
          }
          if (F === 1) {
            Fz = 1 - 0.5 / nN;
            corr = true;
          }
          if (F === 0) {
            Fz = 0.5 / nN;
            corr = true;
          }

          const zH = inv(Hz);
          const zF = inv(Fz);
          const rtData = dta.map((x) => x.rt).filter(Number.isFinite);
          const avgRt =
            rtData.length > 0
              ? rtData.reduce((sum, value) => sum + value, 0) / rtData.length
              : NaN;

          return {
            h,
            m,
            fa,
            cr,
            H,
            F,
            dp: zH - zF,
            c: -0.5 * (zH + zF),
            corr,
            avgRt,
          };
        }

        function f(x) {
          return Number.isFinite(x) ? x.toFixed(2) : "-";
        }

        function percent(x) {
          return Number.isFinite(x) ? `${Math.round(x * 100)}%` : "-";
        }

        function signed(x, digits = 2) {
          if (!Number.isFinite(x)) return "-";
          const n = Number(x.toFixed(digits));
          return n > 0 ? `+${n.toFixed(digits)}` : n.toFixed(digits);
        }

        function changeLabel(delta, formatter = f) {
          const t = translations[currentLanguage];
          if (Math.abs(delta) < 0.0001) return t.unchanged;
          return delta > 0
            ? t.increased(formatter(Math.abs(delta)))
            : t.decreased(formatter(Math.abs(delta)));
        }

        function rtChangeLabel(a, b) {
          const t = translations[currentLanguage];
          const delta = b - a;
          if (!Number.isFinite(delta) || Math.abs(delta) < 10) return t.rtSame;
          const ms = Math.round(Math.abs(delta));
          return delta < 0 ? t.faster(ms) : t.slower(ms);
        }

        function tab(title, m) {
          const t = translations[currentLanguage];
          const signalPresent =
            experimentMode === "advanced" ? t.advancedSignalPresent : t.signalPresent;
          const signalAbsent =
            experimentMode === "advanced" ? t.advancedSignalAbsent : t.signalAbsent;

          return `
            <h3>${title}</h3>
            <table>
              <tr>
                <th></th>
                <th>${signalPresent}</th>
                <th>${signalAbsent}</th>
              </tr>
              <tr>
                <th>${t.respondYes}</th>
                <td>Hit = ${m.h}</td>
                <td>False Alarm = ${m.fa}</td>
              </tr>
              <tr>
                <th>${t.respondNo}</th>
                <td>Miss = ${m.m}</td>
                <td>Correct Rejection = ${m.cr}</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>H</th>
                <th>F</th>
                <th>d′</th>
                <th>c</th>
                <th>Mean RT</th>
              </tr>
              <tr>
                <td>${f(m.H)}</td>
                <td>${f(m.F)}</td>
                <td>${f(m.dp)}</td>
                <td>${f(m.c)}</td>
                <td>${Math.round(m.avgRt)} ms</td>
              </tr>
            </table>
          `;
        }

        function renderResults(s) {
          const t = translations[currentLanguage];
          const { a, b, dc, ddp, dH, dF, sc } = s;

          let heroTitle;
          let heroBody;

          if (dc > 0.05) {
            heroTitle = t.heroConservative;
            heroBody = t.heroConservativeBody;
          } else if (dc < -0.05) {
            heroTitle = t.heroLiberal;
            heroBody = t.heroLiberalBody;
          } else {
            heroTitle = t.heroStable;
            heroBody = t.heroStableBody;
          }

          q("resultHero").innerHTML = `<h3>${heroTitle}</h3><p>${heroBody}</p>`;

          q("criterionValue").textContent = `${f(a.c)} → ${f(b.c)}`;
          q("criterionDelta").textContent = `Δc = ${signed(dc)}`;

          q("sensitivityValue").textContent = `${f(a.dp)} → ${f(b.dp)}`;
          q("sensitivityDelta").textContent = `Δd′ = ${signed(ddp)}`;

          q("scoreValue").textContent = String(sc);
          q("scoreScale").textContent =
            currentLanguage === "fa"
              ? `حداکثر ممکن: ${b.h + b.m}`
              : `Maximum possible: ${b.h + b.m}`;

          q("hitRateValues").textContent = `${percent(a.H)} → ${percent(b.H)}`;
          q("hitRateChange").textContent = changeLabel(dH, percent);

          q("faRateValues").textContent = `${percent(a.F)} → ${percent(b.F)}`;
          q("faRateChange").textContent = changeLabel(dF, percent);

          q("rtValues").textContent =
            `${Math.round(a.avgRt)} ms → ${Math.round(b.avgRt)} ms`;
          q("rtChange").textContent = rtChangeLabel(a.avgRt, b.avgRt);

          q("tables").innerHTML =
            tab(t.normalTable, a) + tab(t.rewardTable, b);
        }

        function show() {
          const a = met("Normal");
          const b = met("Reward");
          const dc = b.c - a.c;
          const ddp = b.dp - a.dp;
          const dH = b.H - a.H;
          const dF = b.F - a.F;
          const sc = data
            .filter((x) => x.block === "Reward")
            .reduce((sum, x) => sum + x.score, 0);

          summary = { a, b, dc, ddp, dH, dF, sc };
          renderResults(summary);
          res.classList.remove("hidden");
        }

        function esc(value) {
          return `"${String(value).replace(/"/g, '""')}"`;
        }

        function dl(name, rows) {
          const csv =
            "\uFEFF" + rows.map((r) => r.map(esc).join(",")).join("\n");
          const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = name;
          a.click();
          setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        }

        q("csv1").onclick = () => {
          const rows = [
            [
              "participant_id",
              "age",
              "gender",
              "education",
              "handedness",
              "language",
              "mode",
              "block",
              "trial",
              "shape",
              "signal_present",
              "response_yes",
              "outcome",
              "rt_ms",
              "score_delta",
            ],
          ];

          data
            .filter((x) => x.block !== "Practice")
            .forEach((x) => {
              rows.push([
                demographicData?.participant_id ?? "",
                demographicData?.age ?? "",
                demographicData?.gender ?? "",
                demographicData?.education ?? "",
                demographicData?.handedness ?? "",
                demographicData?.language ?? currentLanguage,
                x.mode,
                x.block,
                x.trial,
                x.shape,
                x.signal,
                x.response,
                x.outcome,
                x.rt,
                x.score,
              ]);
            });

          dl("SDT_trial_data.csv", rows);
        };

        q("csv2").onclick = () => {
          const { a, b, dc, ddp, dH, dF, sc } = summary;

          dl("SDT_summary.csv", [
            ["participant_id", demographicData?.participant_id ?? ""],
            ["age", demographicData?.age ?? ""],
            ["gender", demographicData?.gender ?? ""],
            ["education", demographicData?.education ?? ""],
            ["handedness", demographicData?.handedness ?? ""],
            ["language", demographicData?.language ?? currentLanguage],
            [],
            [
              "mode",
              "block",
              "Hit",
              "Miss",
              "False_Alarm",
              "Correct_Rejection",
              "Hit_Rate",
              "FA_Rate",
              "d_prime",
              "c",
              "avg_rt_ms",
              "boundary_correction",
            ],
            [
              experimentMode,
              "Normal",
              a.h,
              a.m,
              a.fa,
              a.cr,
              a.H,
              a.F,
              a.dp,
              a.c,
              a.avgRt,
              a.corr,
            ],
            [
              experimentMode,
              "Reward",
              b.h,
              b.m,
              b.fa,
              b.cr,
              b.H,
              b.F,
              b.dp,
              b.c,
              b.avgRt,
              b.corr,
            ],
            [],
            ["delta_c", dc],
            ["delta_d_prime", ddp],
            ["delta_hit_rate", dH],
            ["delta_fa_rate", dF],
            ["delta_avg_rt_ms", b.avgRt - a.avgRt],
            ["reward_score", sc],
          ]);
        };
      })();
