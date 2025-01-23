let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

document.querySelectorAll('.js-calc-button').forEach(button => {
  button.addEventListener('click', () => {
    updateCalculation(button.getAttribute('data-value'));
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    updateCalculation(key);
  } else if (key === '+') {
    updateCalculation(' + ');
  } else if (key === '-') {
    updateCalculation(' - ');
  } else if (key === '*') {
    updateCalculation(' * ');
  } else if (key === '/') {
    updateCalculation(' / ');
  } else if (key === 'Enter') {
    updateCalculation('=');
  } else if (key === 'Backspace') {
    updateCalculation('delete');
  } else if (key === 'Escape') {
    updateCalculation('clear');
  }
});

function updateCalculation(input) {
  if (input === '=') {
    try {
      calculation = eval(calculation);
    } catch (e) {
      calculation = 'Error';
    }
  } else if (input === 'clear') {
    calculation = '';
    console.log('Cleared.');
  } else if (input === 'delete') {
    calculation = calculation.slice(0, -1);
  } else {
    calculation += input;
  }
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  const outputElement = document.querySelector('.js-calculation-output');
  outputElement.innerHTML = calculation;
  adjustFontSize(outputElement);
}

function adjustFontSize(element) {
  const maxWidth = element.parentElement.clientWidth;
  let fontSize = 30; // Initial font size
  element.style.fontSize = fontSize + 'px';

  while (element.scrollWidth > maxWidth && fontSize > 10) {
    fontSize -= 1;
    element.style.fontSize = fontSize + 'px';
  }
}