function darkMode() {
    var body = document.body;
    body.className = "dark-mode";
    const image = document.querySelector(".asterix");
    image.src = "media/asterix/white-asterix.svg"
  }

function lightMode() {
    var body = document.body;
    body.className = "light-mode";
    const image = document.querySelector(".asterix");
    image.src = "media/asterix/black-asterix.svg"
  }

function checkTime(i){
    if (i<10) {
        i="0" + i;
        }
    return i;
}
function startTime(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds=checkTime(seconds);
    document.getElementById('clock').innerHTML=hours+ ":" + minutes + ":"+ seconds;
    t = setTimeout('startTime()',500);
}

window.onload =  startTime;
