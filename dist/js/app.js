(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

setInterval(function () {
  var time = new Date();
  console.log(new Date());

  var hours = padNumber(time.getHours());
  var minutes = padNumber(time.getMinutes());
  var seconds = padNumber(time.getSeconds());
  var percentMinute = time.getSeconds() / 60;
  var totalWidth = 73;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQU07QUFDaEIsTUFBSSxPQUFPLElBQUksSUFBSixFQUFQLENBRFk7QUFFaEIsVUFBUSxHQUFSLENBQVksSUFBSSxJQUFKLEVBQVosRUFGZ0I7O0FBSWhCLE1BQUksUUFBUSxVQUFVLEtBQUssUUFBTCxFQUFWLENBQVIsQ0FKWTtBQUtoQixNQUFJLFVBQVUsVUFBVSxLQUFLLFVBQUwsRUFBVixDQUFWLENBTFk7QUFNaEIsTUFBSSxVQUFVLFVBQVUsS0FBSyxVQUFMLEVBQVYsQ0FBVixDQU5ZO0FBT2hCLE1BQUksZ0JBQWUsS0FBSyxVQUFMLEtBQW1CLEVBQW5CLENBUEg7QUFRaEIsTUFBSSxhQUFhLEVBQWIsQ0FSWTtBQVNoQixVQUFRLEdBQVIsQ0FBWSxhQUFaLEVBVGdCOztBQVdoQixXQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsS0FBcEMsQ0FBMEMsS0FBMUMsR0FBa0QsYUFBQyxHQUFnQixVQUFoQixHQUE4QixJQUEvQixDQVhsQzs7QUFhaEIsV0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFNBQWpDLEdBQWdELGNBQVMsZ0JBQVcsT0FBcEUsQ0FiZ0I7Q0FBTixFQWdCVCxJQWhCSDs7QUFrQkEsU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXdCO0FBQ3RCLE1BQUksTUFBSyxFQUFMLEVBQVM7QUFDWCxXQUFPLE1BQU0sT0FBTyxHQUFQLENBQU4sQ0FESTtHQUFiLE1BR0s7QUFDSCxXQUFPLE9BQU8sR0FBUCxDQUFQLENBREc7R0FITDtDQURGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInNldEludGVydmFsKCgpID0+IHtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpKTtcblxuICBsZXQgaG91cnMgPSBwYWROdW1iZXIodGltZS5nZXRIb3VycygpKTtcbiAgbGV0IG1pbnV0ZXMgPSBwYWROdW1iZXIodGltZS5nZXRNaW51dGVzKCkpO1xuICBsZXQgc2Vjb25kcyA9IHBhZE51bWJlcih0aW1lLmdldFNlY29uZHMoKSk7XG4gIGxldCBwZXJjZW50TWludXRlID10aW1lLmdldFNlY29uZHMoKS8gNjA7XG4gIGxldCB0b3RhbFdpZHRoID0gNzM7XG4gIGNvbnNvbGUubG9nKHBlcmNlbnRNaW51dGUpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZXJCYXJcIikuc3R5bGUud2lkdGggPSAocGVyY2VudE1pbnV0ZSAqIHRvdGFsV2lkdGgpICsgXCJweFwiO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIikuaW5uZXJIVE1MID0gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG5cblxufSwgMTAwMCk7XG5cbmZ1bmN0aW9uIHBhZE51bWJlcihudW0pIHtcbiAgaWYgKG51bSA8MTApIHtcbiAgICByZXR1cm4gXCIwXCIgKyBTdHJpbmcobnVtKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gU3RyaW5nKG51bSk7XG4gIH1cbn1cbiJdfQ==
