# Signal Detection Theory Experiment

An interactive browser-based experiment for exploring **Signal Detection Theory (SDT)** and how reward and punishment can influence the **decision criterion (`c`)**.

The task presents a 6 × 6 grid of circles. On some trials, one circle contains a small gap (**Signal Present**); on other trials, all circles are complete (**Signal Absent**). Participants decide whether the target was present or absent.

## Live Demo

[Open the experiment on GitHub Pages](https://bahareh-bahrami.github.io/Signal-Detection-Experiment/)


## About the Project

This project was created as a psychophysics and neuroscience course assignment to demonstrate the difference between:

- **Perceptual sensitivity (`d′`)** - how well a participant can distinguish signal from noise.
- **Decision criterion (`c`)** - how conservative or liberal the participant is when deciding that a signal is present.
- **Hit Rate** - the proportion of signal-present trials correctly identified.
- **False Alarm Rate** - the proportion of signal-absent trials incorrectly identified as containing a signal.

The experiment compares performance under a **normal condition** and a **reward/punishment condition**.

## Experiment Structure

The experiment contains:

1. **2 practice trials**
2. **10 normal trials**
   - 5 Signal Present trials
   - 5 Signal Absent trials
3. **10 reward/punishment trials**
   - 5 Signal Present trials
   - 5 Signal Absent trials

During each trial:

- A fixation cross is displayed for **500 ms**.
- The visual stimulus is displayed for approximately **1100 ms**.
- The participant responds **Present** or **Absent**.


## Signal Detection Measures

The experiment automatically calculates the main SDT measures.

### Hit Rate

```text
H = Hits / (Hits + Misses)
```

### False Alarm Rate

```text
F = False Alarms / (False Alarms + Correct Rejections)
```

### Sensitivity

```text
d′ = Z(H) - Z(F)
```

### Decision Criterion

```text
c = -0.5 × [Z(H) + Z(F)]
```

Interpretation of `c`:

- `c = 0` - approximately neutral criterion
- `c < 0` - more liberal criterion
- `c > 0` - more conservative criterion

When a Hit Rate or False Alarm Rate is exactly `0` or `1`, the experiment applies a boundary correction before the Z transformation so that `d′` and `c` remain finite.

## Features

- Interactive visual Signal Detection Theory task
- Randomized Signal and Noise trial order
- Randomized target location and gap orientation
- Normal and reward/punishment experimental conditions
- Automatic calculation of Hit, Miss, False Alarm, and Correct Rejection
- Automatic calculation of `H`, `F`, `d′`, `c`, and change in criterion
- Trial-by-trial response-time recording
- CSV export for raw trial data
- CSV export for summary statistics
- Responsive interface for desktop and mobile
- Persian and English interface
- Automatic RTL/LTR layout switching
- Language selection before starting the experiment
- Language switching during the session
- Lilac-themed user interface

## Technologies

The experiment is built as a lightweight standalone web application using:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **HTML Canvas API**
- **Google Fonts**
  - Vazirmatn
  - Inter

No external JavaScript framework or backend is required.

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/Bahareh-Bahrami/signal-detection-experiment.git
```

Open the project folder:

```bash
cd signal-detection-experiment
```

Then open:

```text
index.html
```

in a modern browser such as Chrome, Edge, Firefox, or Safari.

You can also use the VS Code **Live Server** extension if you prefer to run it through a local development server.

## Data Export

At the end of the experiment, participants can download two CSV files.

### Trial-level data

`SDT_trial_data.csv`

Includes:

- Experimental block
- Trial number
- Signal presence
- Participant response
- SDT outcome
- Response time in milliseconds
- Score change

### Summary data

`SDT_summary.csv`

Includes:

- Hits
- Misses
- False Alarms
- Correct Rejections
- Hit Rate
- False Alarm Rate
- `d′`
- `c`
- Boundary-correction status
- Change in criterion
- Reward-block score

## Experimental Note

This is a short **educational demonstration** of Signal Detection Theory rather than a full research-grade psychophysical protocol.

Because each experimental condition contains only 10 trials, the calculated values of `d′` and `c` can be strongly affected by a single response. A larger number of trials would normally be used for stable parameter estimation in formal research.

## Scientific Background

The implementation follows the standard Signal Detection Theory framework for separating discriminability from response strategy.

Relevant references:

- Stanislaw, H., & Todorov, N. (1999). *Calculation of signal detection theory measures*. **Behavior Research Methods, Instruments, & Computers, 31**(1), 137-149. https://doi.org/10.3758/BF03207704
- Killeen, P. R., Taylor, T. J., & Treviño, M. (2018). *Subjects adjust criterion on errors in perceptual decision tasks*. **Psychological Review, 125**(1), 117-130. https://doi.org/10.1037/rev0000056

## Project Status

The experiment is functional and deployed as a static web application.

Current version includes:

- Persian/English language support
- Responsive UI
- Automated SDT analysis
- CSV data export

## Author

**Bahareh Bahrami**

GitHub: [Bahareh-Bahrami](https://github.com/Bahareh-Bahrami)

---

This project was developed for educational purposes as an interactive demonstration of psychophysics and Signal Detection Theory.
