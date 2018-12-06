let startCalcBtn = document.getElementById('start');

let results = document.getElementsByClassName('result-table')[0].getElementsByTagName('div');

let values = [];
for(let i = 1; i < results.length; i+=2) {
    values.push(results[i]);
}

let inputs = document.querySelectorAll('input', '.expenses-item');

let buttons = document.getElementsByTagName('button');
let approveBtn = buttons[0];
let approveOptBtn = buttons[1];
let calcBtn = buttons[2];

let optionals = document.querySelectorAll('.optionalexpenses-item');

let optRevenue = document.querySelector('#income');
let savings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');

let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');