document.getElementById("timer1").addEventListener("click", clickedButton);
var clock = document.getElementById("clock");

let pomodoro = 10;
let time = setInterval(() => {
    clock.innerHTML = pomodoro;
    console.log("tick", pomodoro--);
    if (pomodoro < 1) {
        clearInterval(time);
        clock.innerHTML = "BOOM!"
    }
}, 2000)

function clickedButton(e) {
  e.preventDefault();
  alert("you clicked me");
  clock.innerHTML = pomodoro;
}
