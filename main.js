let calculation = localStorage.getItem('calculation') || '';
    displayCalculation();

document.querySelectorAll('.js-calc-button')
  .forEach(button => {
    button.addEventListener('click', () => {
      updateCalculation(button.getAttribute('data-value'));
    });
  });
    
function updateCalculation(input) {
  if (input === '=') {
    calculation = eval(calculation);
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
  document.querySelector('.js-calculation-output').innerHTML = calculation;
}