const seatMates = [
    [ 'doug', 'pugh', 'arf'],
    [ 'pulp', 'sudho', 'gibraltarf'],
    [ 'fartface', 'bido', 'hulf', 'mustardlegs'],
]

const movies = [
    {
        title: 'The Pianist',
        score: 90,
        year: 2011
    },
    {
        title: 'Harold and Kumar White Castle',
        score: 30,
        year: 2010
    },
    {
        title: 'Eternals',
        score: 93,
        year: 2021
    },
    {
        title: 'Night Crawler',
        score: 88,
        year: 2014
    },
    {
        title: 'Meet the Spartans',
        score: 3,
        year: 2008
    }
]


function checkValue() {
    console.log('hi');
    const typePassword = document.getElementById("password-check");
    console.log(typePassword.value);
    const checkSpace = typePassword.value;
    const validationMessage = document.getElementById('validation-message');

    if (typePassword.value.length >= 6 ) {
        if (checkSpace.indexOf(' ') === -1) {
            validationMessage.innerHTML = "Password is valid";
        } else {
            validationMessage.innerHTML = "Password is valid but spaces are not allowed";
        }

    } else {
        validationMessage.innerHTML = "Password is invalid";
    }

}

function generateNames() {
    const pForLoop = document.getElementById("for-loop-array");
    const seatMates = [
        [ 'doug', 'pugh', 'arf'],
        [ 'pulp', 'sudho', 'gibraltarf'],
        [ 'fartface', 'bido', 'hulf', 'mustardlegs'],
    ]
    for (let i = 0; i < seatMates.length; i++) {
        const row = seatMates[i];
        pForLoop.innerHTML += `Row# ${i + 1}`;
        for( let j = 0; j < row.length; j++) {
            pForLoop.innerHTML += ` ${row[j]} `;

        }
        pForLoop.innerHTML += ` <br>`;

    }
}


function generateNamesForOf() {
    const pForLoop = document.getElementById("for-of-array");
   
    for (let [index, row] of seatMates.entries()) {
        pForLoop.innerHTML += `Row# ${index + 1}`;
        for(let dog of row) {
            pForLoop.innerHTML += ` ${dog} `;

        }
        pForLoop.innerHTML += ` <br>`;
    
    }
}

// arrow function + filter + map
function fetchMovies() {
    console.log(movies.filter(m => m.score > 80).map(m => m.title));
    
}

document.querySelector('.composed-button').addEventListener('click',function(e) {
    console.log(e.composed);
    console.log(e.composedPath());
  });