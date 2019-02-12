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

    // Slider

    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n){
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1){
            slideIndex = slides.length;
        }
        slides.forEach((item) =>{
            item.style.display = 'none';
        });
        dots.forEach((item) => {
            item.classList.remove('dot-active');
        });
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i < dots.length + 1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]){
                currentSlide(i);
            }
        }
    });
})