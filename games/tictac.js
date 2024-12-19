var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function checkWin() {
    for (i = 0; i < 3; i++) {
        if (
            board[i][0] == board[i][1] &&
            board[i][1] == board[i][2] &&
            board[i][0] != 0
        ) {
            return board[i][0];
        }
        if (
            board[0][i] == board[1][i] &&
            board[1][i] == board[2][i] &&
            board[0][i] != 0
        ) {
            return board[0][i];
        }
    }
    if (
        board[0][0] == board[1][1] &&
        board[2][2] == board[1][1] &&
        board[1][1] != 0
    ) {
        return board[1][1];
    } else if (
        board[2][0] == board[1][1] &&
        board[1][1] == board[0][2] &&
        board[1][1] != 0
    ) {
        return board[1][1];
    } else {
        return 0;
    }
}

function empty() {
    for (i = 0; i < 3; i++) {
        for (k = 0; k < 3; k++) {
            if (board[i][k] == 0) {
                return false;
            }
        }
    }
    return true;
}

function removeClass() {
    board;
}

var turn = 1;
var playingboard = document.getElementById("board");

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");

var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");

var g = document.getElementById("g");
var h = document.getElementById("h");
var z = document.getElementById("j");

a.addEventListener("click", aC);
b.addEventListener("click", bC);
c.addEventListener("click", cC);

d.addEventListener("click", dC);
e.addEventListener("click", eC);
f.addEventListener("click", fC);

g.addEventListener("click", gC);
h.addEventListener("click", hC);
z.addEventListener("click", iC);

imgArr = ["../media/player1.png",
    "../media/player2.png"];

function standard(obj, x, y) {
    if (board[x][y] == 0) {
        if (turn == 1) {
            board[x][y] = 1;
            obj.style.backgroundImage = "url(" + imgArr[0] + ")";
            turn = 2;
        } else {
            board[x][y] = 2;
            obj.style.backgroundImage = "url(" + imgArr[1] + ")";
            turn = 1;
        }

        obj.classList.remove("free");
        playingboard.classList.toggle("pl2");
        toggle();
    } else {
        window.alert("This Square is Already Taken!");
    }
    console.log(board);
    gameDone();
}

function aC() {
    standard(a, 0, 0);
}
function bC() {
    standard(b, 0, 1);
}
function cC() {
    standard(c, 0, 2);
}

function dC() {
    standard(d, 1, 0);
}
function eC() {
    standard(e, 1, 1);
}
function fC() {
    standard(f, 1, 2);
}

function gC() {
    standard(g, 2, 0);
}
function hC() {
    standard(h, 2, 1);
}
function iC() {
    if (board[2][2] == 0) {
        if (turn == 1) {
            board[2][2] = 1;
            z.style.backgroundImage = "url(" + imgArr[0] + ")";
            turn = 2;
        } else {
            board[2][2] = 2;
            z.style.backgroundImage = "url(" + imgArr[1] + ")";
            turn = 1;
        }

        z.classList.remove("free");
        playingboard.classList.toggle("pl2");
        toggle();
    } else {
        window.alert("This Square is Already Taken!");
    }
    console.log(board);
    gameDone();
}

function gameDone() {
    if (checkWin()) {
        if (turn == 2) {
            document.getElementById("game").style.display = 'none';
            document.getElementById("pl1").style.display = 'unset';
        } else {
            document.getElementById("game").style.display = 'none';
            document.getElementById("pl2").style.display = 'unset';
        }
    } else if (empty()) {
        document.getElementById("game").style.display = 'none';
        document.getElementById("pl3").style.display = 'unset';
    }
}

function toggle() {
    if (turn == 1) {
        document.getElementById("turn1").classList.add("turnActive");
        document.getElementById("turn2").classList.remove("turnActive");
    } else {
        document.getElementById("turn2").classList.add("turnActive");
        document.getElementById("turn1").classList.remove("turnActive");
    }
}

////////////////////////START GAME//////////////////
var start = document.getElementById("start0")
var game = document.getElementById("game")

start.addEventListener("click", started);

function started() {
    document.getElementById("first").style.display = 'none';
    document.getElementById("pl1").style.display = 'none';
    document.getElementById("pl2").style.display = 'none';
    document.getElementById("pl3").style.display = 'none';
    game.style.display = 'unset';
}
