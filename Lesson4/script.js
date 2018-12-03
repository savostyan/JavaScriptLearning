'use strict';

let money, time;

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let costName = getCostName();
            let costValue = getCostValue();
        
            if ( (typeof(costName) ) === 'string' 
                    && (typeof(costName)) != null
                    && (typeof(costValue)) != null
                    && costName != ''
                    && costValue != ''
                    && costName.length < 50 ) {
                appData.expenses[costName] = costValue;
            }
            else{
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
            appData.moneyPerDay = (appData.budjet / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }
        else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }
        else if(appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        }
        else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.mothIncome = save/100/12*12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.mothIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 2; i++){
            let costName = getOptCostName();
            let costValue = getCostValue();
        
            if ( (typeof(costName) ) === 'string' 
                    && (typeof(costValue)) != null
                    && costValue != ''
                    && costName.length < 50 ) {
                appData.optionalExpenses[i] = costValue;
            }
            else{
                i = i - 1;
            }
        };
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

        if((typeof(items) ) != 'string' 
                || isNaN(items) 
                || items == '' 
                || items == null) {
            console.log("Введены некорректные данные");
        }
        else{
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        let incomeStr = "Способы доп. заработка: ";
        appData.income.forEach(function(item, i, itemArr){
            incomeStr = incomeStr + (i + 1).toString() + ": " + item + ', ';
        });
        alert(incomeStr);
    }
};

console.log("Наша программа включает в себя данные: ");
for (let data in appData) {
    console.log(data);
}


function getCostName(){
    return prompt('Введите обязательную статью расходов в этом месяце');
}

function getOptCostName(){
    return prompt('Статья необязательных расходов?');
}

function getCostValue(){
    return prompt('Во сколько обойдется?');
}

function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();