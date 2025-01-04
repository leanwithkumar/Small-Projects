let boxes = document.querySelectorAll(".box");
let resetbtm = document.querySelector("#reset");
let newgamebtm = document.querySelector('#newgame');
let msgbtm = document.querySelector('#msg');
let showmessage = document.querySelector(".messagecontainer ");
let shownewgame = document.querySelector(".gameclass ");

let turn0 = true;
let moves = 0;


const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", (event) => {

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        moves++;

        checkwinner();
    });

});

const resetgame = () => {
    enableboxes();
    showmessage.classList.add("hide");
    moves = 0;
    turn0 = true;
}

const newgame = () => {
    enableboxes();
    resetbtm.style.visibility = "visible";
    showmessage.classList.add("hide");
    shownewgame.classList.add("unseen");
    moves = 0;
    turn0 = true;

}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msgbtm.innerText = `CONGRATULATIONS ${winner} WON THE MATCH`;
    showmessage.classList.remove("hide");
    shownewgame.classList.remove("unseen");
    disableboxes();
    resetbtm.style.visibility = "hidden";


}

checkwinner = () => {
    for (let pattern of winpattern) {

        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showwinner(position1);
                return;
            }

        }

    }
    if (moves == 9) {
        msgbtm.innerText = `IT'S A DRAW`;
        showmessage.classList.remove("hide");
        shownewgame.classList.remove("unseen");
        disableboxes();
        resetbtm.style.visibility = "hidden";

    }

};

newgamebtm.addEventListener("click", newgame);
resetbtm.addEventListener("click", resetgame);