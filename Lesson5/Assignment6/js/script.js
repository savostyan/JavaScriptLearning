let menu = document.getElementsByTagName('ul')[0];
let menuItems = document.getElementsByClassName('menu-item');

menu.insertBefore(menuItems[2], menuItems[1]);
let li = document.createElement('li');
li.classList.add('menu-item');
li.innerText = 'Пятый пункт';
menu.appendChild(li);

let title = document.getElementById('title');
title.innerText = 'Мы продаем только подлинную технику Apple';

document.getElementsByClassName('adv')[0].remove();

let answer = prompt('Как Вы относитесь к технике Apple?', '');
if (null != answer && isNaN(answer) && answer !== ''){
    let prompt = document.getElementById('prompt');
    prompt.innerText = answer;
}