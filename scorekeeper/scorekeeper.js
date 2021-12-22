const playerBtnOne = document.querySelector('#buttonPlayer1');
const playerBtnTwo = document.querySelector('#buttonPlayer2');
const playerDisplayOne = document.querySelector('#scorePlayer1');
const playerDisplayTwo = document.querySelector('#scorePlayer2');
const resetButton = document.querySelector('#buttonReset');


const uptoScore = document.querySelector('#uptoScore');

console.log(uptoScore);

let playerScoreOne = 0;
let playerScoreTwo = 0;
let winningScore = 3;
let isGameOver = false;

playerBtnOne.addEventListener('click', () => {
    if(!isGameOver) {
        playerScoreOne += 1; 
        if(playerScoreOne === winningScore) {
            isGameOver = true;
            playerDisplayOne.classList.add("is-winner");
            playerDisplayTwo.classList.add("is-loser");
        }
        playerDisplayOne.textContent = playerScoreOne;
        
    }
    
})

playerBtnTwo.addEventListener('click', () => {
    if(!isGameOver) {
        playerScoreTwo += 1; 
        if(playerScoreTwo === winningScore) {
            isGameOver = true;
            playerDisplayOne.classList.add("is-loser");
            playerDisplayTwo.classList.add("is-winner");
        }
        playerDisplayTwo.textContent = playerScoreTwo;
        
    }

})

function resetGame() { 
    isGameOver = false;
    playerScoreOne = 0;
    playerScoreTwo = 0;
    playerDisplayOne.textContent = 0;
    playerDisplayTwo.textContent = 0;
    playerDisplayOne.classList.remove("is-loser", "is-winner");
    playerDisplayTwo.classList.remove("is-loser", "is-winner");
}

resetButton.addEventListener('click', resetGame);


uptoScore.addEventListener('change', () => {
    winningScore = parseInt(this.uptoScore.value);
    resetGame();
   //console.log(this.uptoScore.value);
});
