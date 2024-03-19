let clickCount = 0
const ribbit = new Audio("assets/Frog-sound-ribbit.mp3");

function hop(event) {
    const frogText = document.getElementById("frog-text");
    let nextPosL = Math.floor(Math.random() * 80) + "%";
    let nextPosT = Math.floor(Math.random() * 80) + "%";
    event.target.style.left = nextPosL;
    event.target.style.top = nextPosT;
    frogText.style.left = nextPosL;
    frogText.style.top = nextPosT;
    ribbit.play();
    clickCount++;

    if (clickCount === 1) frogText.innerHTML = "I TOLD YOU NOT TO DO THAT";
    if (clickCount === 2) frogText.innerHTML = "STOP TOUCHING ME YOU FREAK";
    if (clickCount === 3) frogText.innerHTML = "WHY DO YOU NOT RESPECT ME";
    if (clickCount === 4)
        frogText.innerHTML = "MY WRATH WILL BE YOUR DOWNFALL";
    if (clickCount === 5) {
        frogText.innerHTML = "...what";
        event.target.classList.add("here");
    }
    if (clickCount === 6) {
        frogText.innerHTML = "This cannot be good for my health";
    }
    if (clickCount === 7) {
        frogText.innerHTML = "I guess I'm just like this now";
    }
    if (clickCount === 8) {
        frogText.innerHTML = "So you can stop clicking me";
    }
    if (clickCount === 9) {
        frogText.innerHTML = frogText.innerHTML = "";
    }
    if (clickCount === 10) {
        frogText.innerHTML = frogText.innerHTML = "Right?";
    }
    if (clickCount === 11) {
        frogText.innerHTML = frogText.innerHTML = "";
    }
    if (clickCount === 14) {
        frogText.innerHTML = frogText.innerHTML = "Seriously, get a job";
    }
    if (clickCount === 20) {
        frogText.innerHTML = frogText.innerHTML = "STOP IT";
    }
    if (clickCount === 40) {
        frogText.innerHTML = frogText.innerHTML = "FUUUUUUUUUUUCK";
    }
    if (clickCount === 50) {
        alert(
            "RESPECT. You have clicked the frog 50 times. Pino and I owe you a beer."
        );
    }
}

function resetFrog() {
    clickCount = 0
}

export { hop, resetFrog }