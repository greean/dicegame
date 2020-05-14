// variables
const image = document.getElementById("image");
const button = document.getElementById("submit");
const p1score = document.getElementById("score1");
const p2score = document.getElementById("score2");
const comment = document.getElementById("comment");
let tally = 0;
let startAgain = false;

// main content

// checks if score needs to be reset after a win or loss condition
const resetScore = () => {
    if(startAgain == true){
        comment.textContent = " ";
        tally = 0;
        score.textContent = tally; // which player
        startAgain = false;
    }
}
// checks for winning condition after button clicked and rolled 2-6
const checkWin = () => {
    if(score.textContent > 19){     // which player
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
            score.textContent = tally;  // which player
            checkWin();
        }
    }
})
const randNum = () => {
    return (Math.floor(Math.random() * 6) + 1);
}