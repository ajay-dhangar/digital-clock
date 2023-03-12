let pera1 = document.getElementById("pera1");
let pera2 = document.getElementById("pera2");
function function1() {
  pera1.innerHTML = `The message and Image will change according to the time`;
  pera1.style.backgroundColor = "#fff";
  pera1.style.borderRadius = "10px";
}
function function2() {
  pera2.innerHTML = `Time will be updated here after clicking on  "Set Alarm"`;
  pera2.style.backgroundColor = "#fff";
  pera2.style.borderRadius = "10px";
}
function showTime() {
  var showDisplayTime = new Date();
  var hours = showDisplayTime.getHours();
  var mins = showDisplayTime.getMinutes();
  var secs = showDisplayTime.getSeconds();
  var session = document.getElementById("session");
  var hr = showDisplayTime.getHours();

  // for image
  if (hours > 8 && hours < 16) {
    image = "./img/skyline-daytime.jpg"; // 8:00AM - 4:00PM
  } else {
    if (hours > 16 && hours < 19) {
      image = "./img/evening.jpg"; // 4:00PM - 7:00PM
    } else {
      if (5 <= hours && hours <= 8) {
        image = "./img/Component.png"; // 5:00AM - 8:00AM
      } else {
        image = "./img/night.png"; // 7:00PM - 5:00AM
      }
    }
  }

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

  // set the image source attribute to the correct image
  document.getElementById("changeImage").src = image;
  document.getElementById("hours").innerHTML = hours + `<br>hours`;
  document.getElementById("mins").innerHTML = mins + `<br>mins`;
  document.getElementById("secs").innerHTML = secs + `<br>secs`;
  document.getElementById("changeImage").style.borderRadius = "10px";
}
setInterval(showTime, 1000);
