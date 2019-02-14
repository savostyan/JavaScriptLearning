window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let calc = require('./modules/calc.js');
    let form = require('./modules/form.js');
    let modal = require('./modules/modal.js');
    let slider = require('./modules/slider.js');
    let timer = require('./modules/timer.js');
    let tabs = require('./modules/tabs.js');

    calc();
    form();
    modal();
    slider();
    timer();
    tabs();
})