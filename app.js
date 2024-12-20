let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-content");
let msg = document.querySelector("#msg");

let playerO = true;

const winPatterns = [
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8]
];

const enableBtns = () =>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const disableBtns =() => {
    for (box of boxes){
        box.disabled = true;
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBtns();
}

const resetGame = () => {
    playerO = true;
    enableBtns();
    msgContainer.classList.add("hide"); // Hide the message container
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("The Box Was Clicked.");
        if (playerO === true) {
            box.innerText = "O";
            playerO = false;
        } else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
    
        if (val1 != "" && val2 != "" && val3 !=""){
            if (val1 === val2 && val2 === val3){
                console.log("Winner");
                showWinner(val1)
            }
        }
    }
}


newGameBtn.addEventListener("click",resetGame)
resetButton.addEventListener("click",resetGame)
