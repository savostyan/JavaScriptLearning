let startCalcBtn = document.getElementById('start');

let results = document.getElementsByClassName('result-table')[0].getElementsByTagName('div');
console.log(results);
let values = [];
for(let i = 1; i < results.length; i+=2) {
    values.push(results[i]);
}
console.log(values);

let inputs = document.querySelectorAll('input', '.expenses-item');
console.log(inputs);