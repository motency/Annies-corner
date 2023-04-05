function changetitle() {
    let b = document.getElementById("none");
    console.log(b);
    const d = new Date();
    var dd = d.getMinutes();
    b.innerText = dd;
    }

function disappear() {
    let e = document.getElementById("erase");
    e.style.display = "none";
    }

function countdownTen() {
    let countdownList = document.getElementById("countdown-list")
    countdownList.innerHTML = "";
    for (let i = 10; i >= 1; i--) {
        let listItem = document.createElement("li");
        listItem.innerText = i;
        countdownList.appendChild(listItem);
    }
}

function displayWord() {
    const words = ["pie", "diplomat", "compound", "punish", "precede"];
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    const display = [];
    for (var i=0; i < selectedWord.length; i++) {
      display[i] = "_";
    }

    document.getElementById("selectedWord").textContent = "_".repeat(selectedWord.length);
    document.getElementById("selectedWord").dataset.word = selectedWord;
}

function checkGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();
    const selectedWord = document.getElementById("selectedWord").dataset.word;
    const display = document.getElementById("selectedWord").textContent.split(" ");
    let correctGuess = false;
    for (var i = 0; i < selectedWord.length; i++) {
        if (selectedWord.includes(guess)) {
            if (guess === selectedWord[i]) {
                display[i] = guess;
                correctGuess = true;
            }
        }
    }
    document.getElementById("selectedWord").textContent = display.join(" ");
    if (correctGuess) {
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = "Incorrect. Try again.";
    }
}

displayWord();

