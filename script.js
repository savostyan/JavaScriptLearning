'use strict';

function getMoneyValue(){
    return prompt('Ваш бюджет на месяц?');
}

function getDateValue(){
    return prompt('Введите дату в формате YYYY-MM-DD');
}

function getCostName(){
    return prompt('Введите обязательную статью расходов в этом месяце');
}

function getCostValue(){
    return prompt('Во сколько обойдется?');
}

let money = getMoneyValue();
let date = getDateValue();
let firstCostName = getCostName();
let firstCostValue = getCostValue();
let secondCostName = getCostName();
let secondCostValue = getCostValue();

let firstCost = {
    
    name: firstCostName,
    value: firstCostValue
}

let secondCost = {
    name: secondCostName,
    value: secondCostValue
}

let expenses = [firstCost, secondCost];


let appData = {
    money: money,
    timeData: date,
    expenses: [],
    optionalExpenses: [],
    income: [],
    savings: false
};

alert("Бюджет на один день составляет: " + appData.money / 30);