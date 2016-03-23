(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

setInterval(function () {
  console.log(new Date());
}, 1000);

function padNumber(num) {
  if (num.length < 2) return "0" + num;
  return num;
}

function displayTime() {
  var clock = new Date();
  h = clock.getHours();
  m = clock.getMinutes();
  s = clock.getSeconds();
  if (h <= 9) h = "0" + h;
  if (m <= 9) m = "0" + m;
  if (s <= 9) s = "0" + s;

  var time = h + ':' + m + ':' + s;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQVc7QUFDckIsVUFBUSxHQUFSLENBQVksSUFBSSxJQUFKLEVBQVosRUFEcUI7Q0FBWCxFQUVULElBRkg7O0FBSUEsU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXdCO0FBQ3RCLE1BQUksSUFBSSxNQUFKLEdBQWEsQ0FBYixFQUFnQixPQUFPLE1BQU0sR0FBTixDQUEzQjtBQUNBLFNBQU8sR0FBUCxDQUZzQjtDQUF4Qjs7QUFLQSxTQUFTLFdBQVQsR0FBdUI7QUFDckIsTUFBSSxRQUFRLElBQUksSUFBSixFQUFSLENBRGlCO0FBRXJCLE1BQUksTUFBTSxRQUFOLEVBQUosQ0FGcUI7QUFHckIsTUFBSSxNQUFNLFVBQU4sRUFBSixDQUhxQjtBQUlyQixNQUFJLE1BQU0sVUFBTixFQUFKLENBSnFCO0FBS3JCLE1BQUksS0FBSyxDQUFMLEVBQVEsSUFBSSxNQUFNLENBQU4sQ0FBaEI7QUFDQSxNQUFJLEtBQUssQ0FBTCxFQUFRLElBQUksTUFBTSxDQUFOLENBQWhCO0FBQ0EsTUFBSSxLQUFLLENBQUwsRUFBUSxJQUFJLE1BQU0sQ0FBTixDQUFoQjs7QUFFQSxNQUFJLE9BQU8sSUFBSSxHQUFKLEdBQVUsQ0FBVixHQUFjLEdBQWQsR0FBb0IsQ0FBcEIsQ0FUVTtDQUF2QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2cobmV3IERhdGUoKSk7XG59LCAxMDAwKVxuXG5mdW5jdGlvbiBwYWROdW1iZXIobnVtKSB7XG4gIGlmIChudW0ubGVuZ3RoIDwgMikgcmV0dXJuIFwiMFwiICsgbnVtO1xuICByZXR1cm4gbnVtO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGltZSgpIHtcbiAgdmFyIGNsb2NrID0gbmV3IERhdGUoKTtcbiAgaCA9IGNsb2NrLmdldEhvdXJzKCk7XG4gIG0gPSBjbG9jay5nZXRNaW51dGVzKCk7XG4gIHMgPSBjbG9jay5nZXRTZWNvbmRzKCk7XG4gIGlmIChoIDw9IDkpIGggPSBcIjBcIiArIGg7XG4gIGlmIChtIDw9IDkpIG0gPSBcIjBcIiArIG07XG4gIGlmIChzIDw9IDkpIHMgPSBcIjBcIiArIHM7XG5cbiAgdmFyIHRpbWUgPSBoICsgJzonICsgbSArICc6JyArIHM7XG5cbn1cbiJdfQ==
