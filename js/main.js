var peopleSpeed = 3.6;
var bicycleSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

var elForm = document.querySelector('.box');
elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    var elDistance = Number(document.querySelector('.input').value);
    var elSenderOption = document.querySelector('select').value;
    if (elSenderOption === 'm') {
        elDistance /= 1000;
    }
    var resultPeople = hours(elDistance / 3.6);
    var resultBicycle = hours(elDistance / 20.1);
    var resultCar = hours(elDistance / 70);
    var resultPlane = hours(elDistance / 800);
    function hours(a) {
        var hour = Math.floor(a);
        var min = Math.floor((a - hour) * 60);
        if(hour > 0 && min > 0) {
            return `${hour} soat va ${min} daqiqa`;
        }
        else if (hour > 0) {
            return `${hour} soat`;
        }
        else if (min > 0) {
            return `${min} daqiqa`;
        }
        else {
            return '';
        }
    }
    document.querySelector('.foot__result').innerHTML = resultPeople;
    document.querySelector('.bicycle__result').innerHTML = resultBicycle;
    document.querySelector('.car__result').innerHTML = resultCar;
    document.querySelector('.plane__result').innerHTML = resultPlane;
})