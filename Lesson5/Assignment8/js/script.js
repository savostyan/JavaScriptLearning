'use strict';

let startCalcBtn = document.getElementById('start');

let results = document.getElementsByClassName('result-table')[0].getElementsByTagName('div');

let values = [];
for(let i = 1; i < results.length; i+=2) {
    values.push(results[i]);
}

let budgetValue = values[0];
let dayBudgetValue = values[1];
let levelValue = values[2];
let expensesValue = values[3];
let optionalExpensesValue = values[4];
let incomesValue = values[5];

let monthSavingsValue = values[6];
let yearSavingsValue = values[7];

let expencesItem = document.querySelectorAll('input.expenses-item');

let buttons = document.getElementsByTagName('button');
let expensesBtn = buttons[0];
let optionalExpensesBtn = buttons[1];
let countBtn = buttons[2];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

let incomeItem = document.querySelector('#income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('#sum');
let percentValue = document.querySelector('#percent');

let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function getExpencesSum(){
    let expenSum = 0;
    for (let expName in appData.expenses){
        expenSum += +appData.expenses[expName];
    }
    return expenSum;
}

function savingsReCalculate(){
    let sum = +sumValue.value,
    percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
}

startCalcBtn.addEventListener('click', function(){    
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budjet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    let date = new Date(Date.parse(time));
    yearValue.value = date.getFullYear();
    monthValue.value = date.getMonth() + 1;
    dayValue.value = date.getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expencesItem.length; i++){
        let costName = expencesItem[i].value
        let costValue = expencesItem[++i].value;
    
        if ( (typeof(costName) ) === 'string' 
                && (typeof(costName)) != null
                && (typeof(costValue)) != null
                && costName != ''
                && costValue != ''
                && costName.length < 50 ) {
            appData.expenses[costName] = costValue;
            sum += +costValue;
        }
        else{
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++){
        let costValue = optionalExpensesItem[i].value;
        
        appData.optionalExpenses[i] = costValue;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    };
});

countBtn.addEventListener('click', function(){
    if(appData.budjet != undefined){
        let expenSum = getExpencesSum();
        
        appData.moneyPerDay = ((appData.budjet - expenSum)/ 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        }
        else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        }
        else if(appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        }
        else {
            levelValue.textContent = "Произошла ошибка";
        }
    }
    else{
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomesValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    }
    else{
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true){
        savingsReCalculate();
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true){
        savingsReCalculate();
    }
});