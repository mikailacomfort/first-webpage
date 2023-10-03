const targetDate = new Date();

console.log("targetDate is: " + targetDate) 

targetDate.setDate(targetDate.getDate() + 280) 

console.log("the new targetDate is: " + targetDate)

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const x = setInterval(function() {

const now = new Date().getTime();
  
const distance = targetDate - now;

  document.querySelector('#days').innerHTML = Math.floor(distance / (day))+" days, ";
  document.querySelector('#hours').innerHTML = Math.floor((distance % (day)) / (hour))+" hours, ";
  document.querySelector('#minutes').innerHTML = Math.floor((distance % (hour)) / (minute))+" minutes, ";
  document.querySelector('#seconds').innerHTML = Math.floor((distance % (minute)) / second)+" seconds ";
}, second)