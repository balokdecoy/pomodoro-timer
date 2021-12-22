document.getElementById("timer1").addEventListener("click", clickedButton);
var clock = document.getElementById("clock");

let pomodoro = 25;
let time = setInterval(() => {
    console.log("tick", pomodoro--);
    if (pomodoro === 0) {
        clearInterval(time);
        console.log("BOOM!!!")
    }
}, 2000)

function clickedButton(e) {
  e.preventDefault();
  alert("you clicked me");
  clock.innerHTML = 'pomodoro';
}
