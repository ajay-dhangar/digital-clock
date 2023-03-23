let pera1 = document.getElementById("pera1");
let pera2 = document.getElementById("pera2");
let timeText = document.getElementById("timeText");
let greetText = document.getElementById("greetText");
function function1() {
  pera1.innerHTML = `The message and Image will change according to the time`;
  pera1.style.backgroundColor = "#fff";
  pera1.style.borderRadius = "10px";
  pera1.style.height = "100%";
  pera1.style.padding = "8px";
}
function function2() {
  pera2.innerHTML = `Time will be updated here after clicking on  "Set Alarm"`;
  pera2.style.backgroundColor = "#fff";
  pera2.style.borderRadius = "10px";
  pera2.style.height = "88px";
  pera2.style.padding = "8px";
}
function showTime() {
  var showDisplayTime = new Date();
  var hours = showDisplayTime.getHours();
  var mins = showDisplayTime.getMinutes();
  var secs = showDisplayTime.getSeconds();
  var session = document.getElementById("session");
  var hr = showDisplayTime.getHours();

  // for image
  if (hours > 9 && hours < 16) {
    image = "./img/Group 5183.png"; // 9:00AM - 4:00PM
    timeText.innerHTML = `GOOD AFTERNOON !! TAKE SOME SLEEP`;
    greetText.innerHTML = `LET'S HAVE SOME LUNCH !!`;
  } else {
    if (hours > 16 && hours < 19) {
      image = "./img/evening.png"; // 4:00PM - 7:00PM
      timeText.innerHTML = `GOOD EVENING !!`;
      greetText.innerHTML = `STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!`;
    } else {
      if (5 <= hours && hours <= 9) {
        image = "./img/Component.png"; // 5:00AM - 9:00AM
      } else {
        image = "./img/night.png"; // 7:00PM - 5:00AM
        timeText.innerHTML = `GOOD NIGHT !!`;
        greetText.innerHTML = `CLOSE YOUR EYES AND GO TO SLEEP`;
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
