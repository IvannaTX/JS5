'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//adeed to call index info
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Geolocation with two callbacks: sucess and error
if (navigator.geolocation) //Tests our function
navigator.geolocation.getCurrentPosition(function(position){
    // console.log(position); we are only wanting long&lay
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
}, function(){
    alert('Could not find your location');
});