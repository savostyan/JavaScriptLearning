function modal(){
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
}

module.exports = modal;