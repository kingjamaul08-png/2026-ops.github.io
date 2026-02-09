let step = 0;

function nextStep() {
  step++;

  if (step === 1) {
    document.body.innerHTML = `
      <h1>Level 1 💌</h1>
      <p>You make my days brighter.</p>
      <button onclick="nextStep()">Next</button>
    `;
  }

  else if (step === 2) {
    document.body.innerHTML = `
      <h1>Level 2 💖</h1>
      <p>I smile every time I think of you.</p>
      <button onclick="nextStep()">Next</button>
    `;
  }

  else if (step === 3) {
    document.body.innerHTML = `
      <h1>Final Level ❤️</h1>
      <p>Will you be my Valentine?</p>
      <button onclick="yes()">Yes 💕</button>
    `;
  }
}

function yes() {
  document.body.innerHTML = `
    <h1>🥰</h1>
    <p>You just made me the happiest person.</p>
  `;
}
