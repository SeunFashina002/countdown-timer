//Daily Counts
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

//yearly counts
const dy = document.querySelector("#d");
const hr = document.querySelector("#h");
const mn = document.querySelector("#m");
const se = document.querySelector("#s");

//get the current year first using fullYear() function;
var currentYear = new Date().getFullYear();

//get the next year which consist of month date year and time
var eachNewYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function updateCountDown() {
  var currentDay = new Date();
  //result gives distance from now til nxt yr in miliseconds
  var difference = eachNewYear - currentDay;

  //divide by 1000 to convert to seconds
  //Daily Count
  var second = Math.floor(difference / 1000) % 60;
  //yearly count
  var s = Math.floor(difference / 1000);

  //divide by 60 to convert to minutes. i.e minutes remaining to nxt yr;
  //Daily Count
  var minute = Math.floor(difference / 1000 / 60) % 60;
  //yearly count
  var m = Math.floor(difference / 1000 / 60);

  //divide by 60 again to convert to hour;
  //Daily Count
  var hour = Math.floor(difference / 1000 / 60 / 60) % 24;
  //yearly count
  var h = Math.floor(difference / 1000 / 60 / 60);

  //divide by 24 to convert to day;
  //Daily Count
  var day = Math.floor(difference / 1000 / 60 / 60 / 24);
  //yearly count
  var d = Math.floor(difference / 1000 / 60 / 60/ 24);

    //daily count
  days.innerHTML = day < 10 ? "0" + day : day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;

    //yearly count
    dy.innerHTML = d < 10 ? "0" + d : d;
    hr.innerHTML = h < 10 ? "0" + h : h;
    mn.innerHTML = m < 10 ? "0" + m : m;
    se.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(updateCountDown, 1000);
