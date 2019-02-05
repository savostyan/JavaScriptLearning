class TimerManager{
    constructor(endTime, timerElem, hoursElem, minutesElem, secondsElem) {
        this.deadLine = endTime;
        this.timerElement = timerElem;
        this.hoursElement = hoursElem;
        this.minutesElement = minutesElem;
        this.secondsElement = secondsElem;
    } 

    setClock(){
        let timeInterval = setInterval(updateClock, 1000);
        let hoursElem = this.hoursElement;
        let minutesElem = this.minutesElement;
        let secondsElem = this.secondsElement;
        let endTime = this.deadLine;

        function updateClock(){
            let t = getTimeRemaining(endTime);
            
            if (t.total <= 0){
                clearInterval(timeInterval);
            }
    
            hoursElem.textContent = getNormalizedTimeNumber(t.hours > 0 ? t.hours : 0);
            minutesElem.textContent = getNormalizedTimeNumber(t.minutes > 0 ? t.minutes : 0);
            secondsElem.textContent = getNormalizedTimeNumber(t.seconds > 0 ? t.seconds : 0);
        }
    }
}

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

function getNormalizedTimeNumber(num){
    return num < 10 ? "0" + num.toString() : num.toString();
}