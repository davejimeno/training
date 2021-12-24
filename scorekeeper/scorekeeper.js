const playerOne = { 
    score: 0,
    button: document.querySelector('#buttonPlayer1'),
    display: document.querySelector('#scorePlayer1')
}

const playerTwo = { 
    score: 0,
    button: document.querySelector('#buttonPlayer2'),
    display: document.querySelector('#scorePlayer2')
}

const resetButton = document.querySelector('#buttonReset');
const uptoScore = document.querySelector('#uptoScore');

let playerScoreOne = 0;
let playerScoreTwo = 0;
let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1; 
        if(player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add("is-winner");
                opponent.display.classList.add("is-loser");
                player.button.disabled = true;
                opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

playerOne.button.addEventListener('click', () => {
    updateScores(playerOne, playerTwo)
})

playerTwo.button.addEventListener('click', () => {
    updateScores(playerTwo, playerOne)
})

function resetGame() { 
    isGameOver = false;
    for(let player of [playerOne, playerTwo]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove("is-loser", "is-winner");
        player.button.disabled = false;
    }
}

resetButton.addEventListener('click', resetGame);

uptoScore.addEventListener('change', () => {
    winningScore = parseInt(this.uptoScore.value);
    resetGame();
   //console.log(this.uptoScore.value);
});

 
/* Callback Hell

const delayedBackgroundChange = (newColor, delayTime, nextTask) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        nextTask && nextTask();
    }, delayTime)
}

delayedBackgroundChange('#d5495c', 1000, () => {
    delayedBackgroundChange('#d58a49', 1000, () => {
        delayedBackgroundChange('#d9cd36', 1000, () => {
            delayedBackgroundChange('#5ccf55', 1000, () => {
                delayedBackgroundChange('#55adcf', 1000, () => {
    
                })
            })
        })
    })
})
*/


const delayedBackgroundChange = (newColor, delayTime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delayTime)
    })
} 

delayedBackgroundChange('#d5495c', 1000)
.then(() => delayedBackgroundChange('#d58a49', 1000))
.then(() => delayedBackgroundChange('#d9cd36', 1000))
.then(() => delayedBackgroundChange('#5ccf55', 1000))
.then(() => delayedBackgroundChange('#55adcf', 1000))
