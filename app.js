const display = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');

let currentInput = '';

let operator = '';

let previousInput = '';

buttons.forEach(button => {

    button.addEventListener('click', () => {

        if (button.dataset.number) {

            currentInput += button.dataset.number;

            display.textContent = currentInput;

        } else if (button.dataset.op) {

            operator = button.dataset.op;

            previousInput = currentInput;

            currentInput = '';

        } else if (button.id === 'equal-to') {

            currentInput = eval(`${previousInput} ${operator} ${currentInput}`);

            display.textContent = currentInput;

            previousInput = '';

            operator = '';

        } else if (button.id === 'clear') {

            currentInput = '';

            previousInput = '';

            operator = '';

            display.textContent = '0';

        }

    });

});