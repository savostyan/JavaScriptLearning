
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    
    
let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:9615/js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            resolve(data);  
        } else {
            reject("Что-то пошло не так!");
        }
    });
});

    promise.then(function(data){
        inputUsd.value = inputRub.value / data.usd;
    })
    .catch(function(error){
        inputUsd.value = error;
    });

});