
//Time 
var player = document.getElementById('player');
var progressed = document.getElementById('progressed');
var progress_bar = document.getElementById('progress_bar');

window.onload = function() {
    document.getElementsByClassName("one").addEventListener('click', changeClass);
}

document.querySelector('#one').addEventListener('click', function (ev) {
    playSong(this, 'trax/bounce-synth.wav')
})
document.querySelector('#two').addEventListener('click', function (ev) {
    playSong(this, 'trax/nuero-synth.wav')
})
document.querySelector('#three').addEventListener('click', function (ev) {
    playSong(this, 'trax/pop.wav')
})

function playSong(targetElement, track) {
     player.src = track
    player.play()
    toggleClass(targetElement)
}

let highlightedElement

function toggleClass(/** @type {HTMLElement} */ thisValue) {
    // 1.
    if (highlightedElement) {
        highlightedElement.classList.remove('clicked')
    }
    highlightedElement = thisValue

    // 2.
    thisValue.classList.add('clicked')
}

// Progress
progress_bar.onclick = function(e) {
    player.currentTime = ((e.offsetX / progress_bar.offsetWidth) * player.duration);
}

// Play / Pause Button 
var playpause = function () {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
}
  
playbtn.addEventListener("click", playpause);
  
player.onplay = function () {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}
  
player.onpause = function () {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
}
  
// Duration Update 
player.ontimeupdate = function (e) {
    let ct = player.currentTime;
    let duration = player.duration;
    current.innerHTML = timeFormat(ct);

    progressed.style.width = Math.floor(ct *100 / duration) + "%";
    
    prog = Math.floor(((ct * 60) / duration));
    progress_bar.style.setProperty("--progress_bar", prog + "%");
}

function timeFormat(ct) {
    minutes = Math.floor((ct / 60));
    seconds = Math.floor((ct % 60));
    if (seconds < 10) {
        seconds = "0"+seconds;
    }
    return minutes + ":" + seconds;
  }

