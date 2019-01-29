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

    let deadline = '2019-01-17';

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
            
            if (t.total <= 0){
                clearInterval(timeInterval);
            }

            hours.textContent = getNormalizedTimeNumber(t.hours > 0 ? t.hours : 0);
            minutes.textContent = getNormalizedTimeNumber(t.minutes > 0 ? t.minutes : 0);
            seconds.textContent = getNormalizedTimeNumber(t.seconds > 0 ? t.seconds : 0);
        }
    }

    function getNormalizedTimeNumber(num){
        return num < 10 ? "0" + num.toString() : num.toString();
    }

    setClock('timer', deadline);

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
        knowMore[i].addEventListener('click', function(elem){
            showModalWindow(this);
        });
    }

    // Options

    class Options {
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        makeCssText(){
            let css = '';
            if (this.height !== undefined){
                css += 'height:' + this.height + ';';
            }
            if (this.width !== undefined){
                css += 'width:' + this.width + ';';
            }
            if (this.bg !== undefined){
                css += 'background:' + this.bg + ';';
            }
            if (this.fontSize !== undefined){
                css += 'font-size:' + this.fontSize + ';';
            }
            if (this.textAlign !== undefined){
                css += 'text-align:' + this.textAlign + ';';
            }
            return css;
        }
        createTextDiv(text){
            let div = document.createElement('div');
            div.textContent = text;
            div.style.cssText = '' + makeCssText() + '';
        }
    }

    let option = new Options('20px', '30px', 'red', 10, 'center');
    option.createTextDiv('Hello, World!'); 
})