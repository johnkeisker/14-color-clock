(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

setInterval(function () {

  var audio = new Audio('../images/Pickup_Coin9.wav');
  audio.play();

  var time = new Date();
  console.log(new Date());

  var hours = padNumber(time.getHours());
  var minutes = padNumber(time.getMinutes());
  var seconds = padNumber(time.getSeconds());
  var percentMinute = time.getSeconds() / 60;
  var totalWidth = 200;
  console.log(percentMinute);

  document.querySelector("#timerBar").style.width = percentMinute * totalWidth + "px";

  document.querySelector("#clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);

function padNumber(num) {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return String(num);
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQU07O0FBRWhCLE1BQUksUUFBUSxJQUFJLEtBQUosQ0FBVSw0QkFBVixDQUFSLENBRlk7QUFHaEIsUUFBTSxJQUFOLEdBSGdCOztBQUtoQixNQUFJLE9BQU8sSUFBSSxJQUFKLEVBQVAsQ0FMWTtBQU1oQixVQUFRLEdBQVIsQ0FBWSxJQUFJLElBQUosRUFBWixFQU5nQjs7QUFRaEIsTUFBSSxRQUFRLFVBQVUsS0FBSyxRQUFMLEVBQVYsQ0FBUixDQVJZO0FBU2hCLE1BQUksVUFBVSxVQUFVLEtBQUssVUFBTCxFQUFWLENBQVYsQ0FUWTtBQVVoQixNQUFJLFVBQVUsVUFBVSxLQUFLLFVBQUwsRUFBVixDQUFWLENBVlk7QUFXaEIsTUFBSSxnQkFBZSxLQUFLLFVBQUwsS0FBbUIsRUFBbkIsQ0FYSDtBQVloQixNQUFJLGFBQWEsR0FBYixDQVpZO0FBYWhCLFVBQVEsR0FBUixDQUFZLGFBQVosRUFiZ0I7O0FBZWhCLFdBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxLQUFwQyxDQUEwQyxLQUExQyxHQUFrRCxhQUFDLEdBQWdCLFVBQWhCLEdBQThCLElBQS9CLENBZmxDOztBQWlCaEIsV0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFNBQWpDLEdBQWdELGNBQVMsZ0JBQVcsT0FBcEUsQ0FqQmdCO0NBQU4sRUFvQlQsSUFwQkg7O0FBc0JBLFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QjtBQUN0QixNQUFJLE1BQUssRUFBTCxFQUFTO0FBQ1gsV0FBTyxNQUFNLE9BQU8sR0FBUCxDQUFOLENBREk7R0FBYixNQUdLO0FBQ0gsV0FBTyxPQUFPLEdBQVAsQ0FBUCxDQURHO0dBSEw7Q0FERiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJzZXRJbnRlcnZhbCgoKSA9PiB7XG5cbiAgdmFyIGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi9pbWFnZXMvUGlja3VwX0NvaW45LndhdicpO1xuICBhdWRpby5wbGF5KCk7XG5cbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpKTtcblxuICBsZXQgaG91cnMgPSBwYWROdW1iZXIodGltZS5nZXRIb3VycygpKTtcbiAgbGV0IG1pbnV0ZXMgPSBwYWROdW1iZXIodGltZS5nZXRNaW51dGVzKCkpO1xuICBsZXQgc2Vjb25kcyA9IHBhZE51bWJlcih0aW1lLmdldFNlY29uZHMoKSk7XG4gIGxldCBwZXJjZW50TWludXRlID10aW1lLmdldFNlY29uZHMoKS8gNjA7XG4gIGxldCB0b3RhbFdpZHRoID0gMjAwO1xuICBjb25zb2xlLmxvZyhwZXJjZW50TWludXRlKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVyQmFyXCIpLnN0eWxlLndpZHRoID0gKHBlcmNlbnRNaW51dGUgKiB0b3RhbFdpZHRoKSArIFwicHhcIjtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpLmlubmVySFRNTCA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuXG5cbn0sIDEwMDApO1xuXG5mdW5jdGlvbiBwYWROdW1iZXIobnVtKSB7XG4gIGlmIChudW0gPDEwKSB7XG4gICAgcmV0dXJuIFwiMFwiICsgU3RyaW5nKG51bSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyhudW0pO1xuICB9XG59XG4iXX0=
