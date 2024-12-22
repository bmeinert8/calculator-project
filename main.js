let calculation = localStorage.getItem('calculation') || '';
    displayCalculation();
    
    function updateCalculation(input) {
      if (input === '=') {
        calculation = eval(calculation);
      } else if (input === 'clear') {
        calculation = '';
        console.log('Cleared.');
      } else {
      calculation += input;
      }
      displayCalculation();

      localStorage.setItem('calculation', calculation);
    }

    function displayCalculation() {
      document.querySelector('.js-calculation-output').innerHTML = calculation;
    }