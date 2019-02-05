//Send JSON Data

    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form');
    let input = form.getElementsByTagName('input');
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        let request = new XMLHttpRequest();
        let promise = new Promise(resolve, reject)
        {
            sendRequest(request);
        }
        request.addEventListener('readystatechange', function(){
            statusMessage.innerHTML = getStatusMessage(request);
        });
        
        for (let i = 0; i < input.length; i++){
            input[i].value = '';
        }
    });

    function getStatusMessage(request){
        if(request.readyState < 4){
            return message.loading;
        } else if(request.readyState === 4 && request.status == 200){
            return message.success;
        } else{
            return message.failure;
        }
    }

    function sendRequest(request){
        form.appendChild(statusMessage);

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        
        let formData = new FormData(form);
        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);
    }