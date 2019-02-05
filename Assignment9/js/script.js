window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let tabMgr = new TabManager(tab, tabContent);

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if(target == tab[i]){       
                    tabMgr.showConcreteTab(i);
                    break;
                }
            }
        }
    });

    tabMgr.showConcreteTab(0);

    //Timer

    let deadline = '2019-03-03';
    let timer = document.getElementById('timer');
    
    let hours = timer.querySelector('.hours');
    let minutes = timer.querySelector('.minutes');
    let seconds = timer.querySelector('.seconds');

    let timerMgr = new TimerManager(deadline, timer, hours, minutes, seconds);

    timerMgr.setClock();

    //Modal

    let more = document.querySelector('.more');
    function showModalWindow(sourceElem){
        let overlay = document.querySelector('.overlay');
        let close = document.querySelector('.popup-close');

        sourceElem.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            sourceElem.classList.remove('more-splash');
            document.body.style.overflow = '';
        }); 
    }

    showModalWindow(more);

    let knowMore = document.querySelectorAll('.description-btn');
        
    for (let i = 0; i < knowMore.length; i++){
        knowMore[i].addEventListener('click', function(){
            showModalWindow(this);
        });
    }

    

})