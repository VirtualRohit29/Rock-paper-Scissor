let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// const body = document.querySelector("body");
const userscore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");


const drawgame = () => {

    msg.innerText = "game was draw! play again";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userScore++;
        userscore.innerText = userScore;

        document.body.style.backgroundImage = 'url("wins.jpg")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        msg.innerText = `You win! yours ${userchoice} beats comp ${compchoice}`;
    } else {
        compscore++;
        compScore.innerText = compscore;

        document.body.style.backgroundImage = 'url("love.avif")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        msg.innerText = `You lose. comp ${compchoice} beats your ${userchoice}`;
    }
};





const gencomputerchoice = () => {
    const options = ["rock", "paper", "scisscors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playgame = (userchoice) => {

    //  generate computer choice --> modular
    const compchoice = gencomputerchoice();

    //draw game 
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors,paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // scissors , rock
            userwin = compchoice === "scissors" ? false : true;
        } else {
            // paper , rock
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playgame(userchoice);
    });
});
