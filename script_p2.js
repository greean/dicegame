// variables
const image = document.getElementById("image");
const button = document.getElementById("submit");
const score = document.getElementById("score");
const comment = document.getElementById("comment");
let tally = 0;
let startAgain = false;

// main content

// checks if score needs to be reset after a win or loss condition
const resetScore = () => {
    if(startAgain == true){
        comment.textContent = " ";
        tally = 0;
        score.textContent = tally;
        startAgain = false;
    }
}
// checks for winning condition after button clicked and rolled 2-6
const checkWin = () => {
    if(score.textContent > 19){
        comment.textContent = "You win!!";
        startAgain = true;
        submit.textContent = "Start";
    }else{
        submit.textContent = "Roll";
    }
}


submit.addEventListener("click", () => {
    resetScore();
    let rolled = randNum();
    console.log(rolled);
    for(let i = 1; i < 7; i++){
        if(rolled == 1){
            image.src = `img/dice1.png`;
            comment.textContent = "Sorry! Start again!";
            startAgain = true;
            submit.textContent = "Start";
        }else if(rolled == i){
            image.src = `img/dice${i}.png`;
            comment.textContent = " ";
            tally += rolled;
            score.textContent = tally;
            checkWin();
        }
    }
})
const randNum = () => {
    return (Math.floor(Math.random() * 6) + 1);
}
//console.log(randNum);

// Code for genearting a random number 1-6
// let numList = [];

// for(let i = 0; i < 6; i++){
//     numList.push(Math.floor(Math.random() * 5) + 1);
// }

// console.log(numList);
