'use strict';

function getMoneyValue(){
    return +prompt('Ваш бюджет на месяц?');
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

let appData = {
    budjet: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

    }
};

/*let i = 0;
 while(i < 2){
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

    }
    i++;
}; */

/* do {
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

    }
}
while(++i < 2); */

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

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