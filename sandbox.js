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
    const seatMates = [
        [ 'doug', 'pugh', 'arf'],
        [ 'pulp', 'sudho', 'gibraltarf'],
        [ 'fartface', 'bido', 'hulf', 'mustardlegs'],
    ]
    for (let [index, row] of seatMates.entries()) {
        pForLoop.innerHTML += `Row# ${index + 1}`;
        for(let dog of row) {
            pForLoop.innerHTML += ` ${dog} `;

        }
        pForLoop.innerHTML += ` <br>`;
    
    }
}