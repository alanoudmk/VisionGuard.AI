const questions = [
  { key: "Gender", text: "What is your gender?", options: ["Male", "Female"] },
  { key: "Age", text: "How old are you?", input: "number" },
  { key: "Sleep duration", text: "How many hours do you sleep per night?", input: "number" },
  { key: "Sleep quality", text: "How would you rate your sleep quality?", options: ["1", "2", "3", "4", "5"] },
  { key: "Stress level", text: "How would you rate your stress level?", options: ["1", "2", "3", "4", "5"] },
  { key: "Blood pressure", text: "What is your average blood pressure? (e.g. 120/80)", input: "text" },
  { key: "Heart rate", text: "What is your resting heart rate?", input: "number" },
  { key: "Daily steps", text: "How many steps do you walk daily?", input: "number" },
  { key: "Physical activity", text: "How many minutes of physical activity per week?", input: "number" },
  { key: "Height", text: "What is your height in cm?", input: "number" },
  { key: "Weight", text: "What is your weight in kg?", input: "number" },
  { key: "Sleep disorder", text: "Do you have a sleep disorder?", options: ["Yes", "No"] },
  { key: "Wake up during night", text: "Do you wake up during the night?", options: ["Yes", "No"] },
  { key: "Feel sleepy during day", text: "Do you feel sleepy during the day?", options: ["Yes", "No"] },
  { key: "Caffeine consumption", text: "Do you consume caffeine daily?", options: ["Yes", "No"] },
  { key: "Alcohol consumption", text: "Do you consume alcohol?", options: ["Yes", "No"] },
  { key: "Smoking", text: "Do you smoke?", options: ["Yes", "No"] },
  { key: "Medical issue", text: "Do you have any medical conditions?", options: ["Yes", "No"] },
  { key: "Ongoing medication", text: "Are you on any ongoing medications?", options: ["Yes", "No"] },
  { key: "Smart device before bed", text: "Do you use a smart device before bed?", options: ["Yes", "No"] },
  { key: "Average screen time", text: "How many hours per day do you spend on screens?", input: "number" },
  { key: "Blue-light filter", text: "Do you use a blue-light filter on your devices?", options: ["Yes", "No"] },
  { key: "Discomfort Eye-strain", text: "Do you experience eye strain?", options: ["Yes", "No"] },
  { key: "Redness in eye", text: "Do you often have redness in your eyes?", options: ["Yes", "No"] },
  { key: "Itchiness/Irritation in eye", text: "Do you experience itchiness or irritation in your eyes?", options: ["Yes", "No"] }
];

let current = 0;
let answers = {};

function renderQuestion() {
  const q = questions[current];
  document.getElementById("question-text").innerText = q.text;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  const progress = ((current + 1) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";

  if (q.input) {
    const input = document.createElement("input");
    input.type = q.input;
    input.id = "input-answer";
    input.placeholder = "Enter your answer...";
    optionsDiv.appendChild(input);
    document.getElementById("next-btn").classList.remove("hidden");
  } else if (q.options) {
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        answers[q.key] = opt;
        nextQuestion();
      };
      optionsDiv.appendChild(btn);
    });
    document.getElementById("next-btn").classList.add("hidden");
  }
}

function nextQuestion() {
  const q = questions[current];
  if (q.input) {
    const val = document.getElementById("input-answer").value;
    if (val === "") return alert("Please enter a value.");
    answers[q.key] = val;
  }

  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-section").classList.add("hidden");
  document.getElementById("result-section").classList.remove("hidden");
  document.getElementById("progress-container").style.display = "none";
}

window.onload = renderQuestion;
