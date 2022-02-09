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
    navigator.geolocation.getCurrentPosition(
        function(position) {
         // console.log(position); we are only wanting long&lay
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude]

    const map = L.map('map').setView([coords], 13); //13 means zoom
    // L stand for namespace like intl/has a couple map methods

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([coords])
    .addTo(map) //available as a global variable
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}, function(){
    alert('Could not find your location');
});