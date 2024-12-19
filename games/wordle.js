var word;
var activeRow = 0;
var activeBox = 1;

var christmasWords = ["GIFTS", "PARTY", "ANGEL", "FROST", "FEAST", "CAROL", "CARDS", "FAITH", "SNOWY", "WHITE", "LIGHT", "DECOR", "HOPES", "CHOIR", "GIVES", "ADORN", "CHARM", "CLAUS", "FABLE", "GAMES", "MAGIC", "NORTH", ""];

function startGame() {
    word = christmasWords[Math.floor(Math.random() * christmasWords.length)];
    var squares = document.querySelectorAll('.g');
    squares.forEach(sq => {
        sq.style.backgroundColor = 'var(--light-b)';
        sq.innerHTML = ' ';
    });
    document.getElementById("loss").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("first").style.display = "none";
    document.getElementById("wordle").style.display = "unset";
    activeRow = 0;
    activeBox = 1;
}

function checkWord() {
    if (activeBox == 5 && activeRow <= 6) {
        var userWord = document.getElementById(activeRow * 5 + 1).innerHTML;
        userWord += document.getElementById(activeRow * 5 + 2).innerHTML;
        userWord += document.getElementById(activeRow * 5 + 3).innerHTML;
        userWord += document.getElementById(activeRow * 5 + 4).innerHTML;
        userWord += document.getElementById(activeRow * 5 + 5).innerHTML;

        var color = [0, 0, 0, 0, 0];

        let matchedCount = 0;
        let matchedLetters = "";

        for (var i = 0; i < 5; i++) {
            var formatted = activeRow * 5 + (i + 1);
            if (word[i] == userWord[i]) {
                document.getElementById(formatted).style.backgroundColor = "green";
                matchedCount++;
                matchedLetters += userWord[i];
            }
        }

        for (var i = 0; i < 5; i++) {
            var formatted = activeRow * 5 + (i + 1);
            if (
                word.indexOf(userWord[i]) > -1 &&
                matchedLetters.indexOf(userWord[i]) < 0 && document.getElementById(formatted).style.backgroundColor != "green"
            ) {
                document.getElementById(formatted).style.backgroundColor = "goldenrod";
                matchedLetters += userWord[i];
            }
        }

        activeRow++;
        activeBox = 1;
        console.log(activeRow);
        if (matchedCount == 5) {
            document.getElementById("win").style.display = "unset";
            document.getElementById("wordle").style.display = "none";
        } else if (activeRow >= 6) {
            document.getElementById("loss").style.display = "unset";
            document.getElementById("sorry").innerHTML = `The word was: ${word}. Good luck next time!`;
            document.getElementById("wordle").style.display = "none";
        }
    }
}

function updateActive(ids) {
    formatted = activeRow * 5 + activeBox;
    document.getElementById(formatted).innerHTML = document.getElementById(
        ids
    ).innerHTML;
    activeBox++;
    if (activeBox % 6 == 0) {
        activeBox = 5;
    }
}

function deleteBtn() {
    formatted = activeRow * 5 + activeBox;
    document.getElementById(formatted).innerHTML = " ";
    document.getElementById((formatted - 1 )).innerHTML = " ";
    activeBox--;
    if (activeBox < 1) {
        activeBox = 1;
    }
}

document.getElementById("A").addEventListener("click", () => {
    updateActive("A");
});
document.getElementById("B").addEventListener("click", () => {
    updateActive("B");
});
document.getElementById("C").addEventListener("click", () => {
    updateActive("C");
});
document.getElementById("D").addEventListener("click", () => {
    updateActive("D");
});
document.getElementById("E").addEventListener("click", () => {
    updateActive("E");
});
document.getElementById("F").addEventListener("click", () => {
    updateActive("F");
});
document.getElementById("G").addEventListener("click", () => {
    updateActive("G");
});
document.getElementById("H").addEventListener("click", () => {
    updateActive("H");
});
document.getElementById("I").addEventListener("click", () => {
    updateActive("I");
});
document.getElementById("J").addEventListener("click", () => {
    updateActive("J");
});
document.getElementById("K").addEventListener("click", () => {
    updateActive("K");
});
document.getElementById("L").addEventListener("click", () => {
    updateActive("L");
});
document.getElementById("M").addEventListener("click", () => {
    updateActive("M");
});
document.getElementById("N").addEventListener("click", () => {
    updateActive("N");
});
document.getElementById("O").addEventListener("click", () => {
    updateActive("O");
});
document.getElementById("P").addEventListener("click", () => {
    updateActive("P");
});
document.getElementById("Q").addEventListener("click", () => {
    updateActive("Q");
});
document.getElementById("R").addEventListener("click", () => {
    updateActive("R");
});
document.getElementById("S").addEventListener("click", () => {
    updateActive("S");
});
document.getElementById("T").addEventListener("click", () => {
    updateActive("T");
});
document.getElementById("U").addEventListener("click", () => {
    updateActive("U");
});
document.getElementById("V").addEventListener("click", () => {
    updateActive("V");
});
document.getElementById("W").addEventListener("click", () => {
    updateActive("W");
});
document.getElementById("X").addEventListener("click", () => {
    updateActive("X");
});
document.getElementById("Y").addEventListener("click", () => {
    updateActive("Y");
});
document.getElementById("Z").addEventListener("click", () => {
    updateActive("Z");
});
document.getElementById("Delete").addEventListener("click", deleteBtn);
document.getElementById("Enter").addEventListener("click", checkWord);


document.getElementById("start1").addEventListener("click", startGame);
document.getElementById("start2").addEventListener("click", startGame);
document.getElementById("first").addEventListener("click", startGame);
