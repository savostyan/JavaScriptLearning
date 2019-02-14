window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let calc = require('./modules/calc.js').default;
    let form = require('./modules/form.js').default;
    let modal = require('./modules/modal.js').default;
    let slider = require('./modules/slider.js').default;
    let timer = require('./modules/timer.js').default;
    let tabs = require('./modules/tabs.js').default;

    calc();
    form();
    modal();
    slider();
    timer();
    tabs();
})