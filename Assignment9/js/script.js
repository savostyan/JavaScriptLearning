window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    ///Скрыть элемент таба с номером tabIndex
    function hideTabContent(tabIndex){
        tabContent[tabIndex].classList.remove('show');
        tabContent[tabIndex].classList.add('hide');
    }

    ///Отобразить элемент таба с номером tabIndex
    function showTabContent(tabIndex){
        tabContent[tabIndex].classList.remove('hide');
        tabContent[tabIndex].classList.add('show');
    }

    function showConcreteTab(tabIndex){
        showTabContent(tabIndex);
        for (let i = 0; i < tab.length; i++){
            if (i !== tabIndex){
                hideTabContent(i);
            }
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if(target == tab[i]){       
                    showConcreteTab(i);
                    break;
                }
            }
        }
    });

    showConcreteTab(0);

    //Timer

    let deadline = '2019-02-01';

    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endTime){
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
})