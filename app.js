const display = document.getElementById('display');
const themeSwitch = document.getElementById('themeSwitch');

function append(char) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}

function clearDisplay() {
  display.innerText = '0';
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9+\-*/.]/.test(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    display.innerText = display.innerText.slice(0, -1) || '0';
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeSwitch.checked);
});
