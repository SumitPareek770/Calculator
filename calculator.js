const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

function updateDisplay(value) {
  display.value = value || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const val = button.getAttribute('data-value');

    if (val === 'C') {
      currentInput = '';
    } else if (val === '←') {
      currentInput = currentInput.slice(0, -1);
    } else if (val === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      if (currentInput === 'Error') currentInput = '';
      currentInput += val;
    }

    updateDisplay(currentInput);
  });
});

// Bonus: Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((/\d/).test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    currentInput += key;
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'Escape') {
    currentInput = '';
  }

  updateDisplay(currentInput);
});
