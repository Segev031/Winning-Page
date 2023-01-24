const confettiHolder = document.getElementById("confetti-holder");

function createConfetti() {
    for (let i = 0; i < 10; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.top = Math.floor(Math.random() * 70) + "%";
        confetti.style.left = Math.floor(Math.random() * 100) + "%";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
        confettiHolder.appendChild(confetti);
    }
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function party() {
    // define the interval function
    var interval = setInterval(() => {
        // code to be executed
        createConfetti();
    }, 3500);
}