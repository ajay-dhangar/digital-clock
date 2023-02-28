function showTime() {
  var showDisplayTime = new Date();
  var hours = showDisplayTime.getHours();
  var mins = showDisplayTime.getMinutes();
  var secs = showDisplayTime.getSeconds();
  var session = document.getElementById("session");
  var hr = showDisplayTime.getHours();

  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
  if ((hours + "").length === 1) {
    hours = "0" + hours;
  }
  if ((mins + "").length === 1) {
    mins = "0" + mins;
  }
  if ((secs + "").length === 1) {
    secs = "0" + secs;
  }

  document.getElementById("hours").innerHTML = hours + `<br>hours`;
  document.getElementById("mins").innerHTML = mins + `<br>mins`;
  document.getElementById("secs").innerHTML = secs + `<br>secs`;
}
setInterval(showTime, 1000);
