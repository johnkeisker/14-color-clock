setInterval(function() {
  console.log(new Date());
}, 1000)

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
