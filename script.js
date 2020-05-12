// variables
const image = document.getElementById("image");
const button = document.getElementById("submit");
const score = document.getElementById("score");
const comment = document.getElementById("comment");
let tally = 0;

// main content
submit.addEventListener("click", () => {
    let rolled = randNum();
    console.log(rolled);
    for(let i = 1; i < 7; i++){
        if(rolled == 1){
            image.src = `img/dice1.png`;
            comment.textContent = "Sorry! Start again!";
            tally = 0;
            score.textContent = tally;
        }else if(rolled == i){
            image.src = `img/dice${i}.png`;
            comment.textContent = " ";
            tally += rolled;
            score.textContent = tally;
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
