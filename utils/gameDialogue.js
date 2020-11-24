const gameDialogue = (name1, name2, move1, move2, power1, power2) => {
    console.log('Player1 has chosen:');
    setTimeout(() => {
        console.log(name1.toUpperCase());
    }, 2000)
    setTimeout(() => {
        console.log('Player2 has chosen:');
    }, 4000)
    setTimeout(() => {
        console.log(name2.toUpperCase());
    }, 6000)
    setTimeout(() => {
        console.log(name1.toUpperCase() + ' uses ' + move1.toUpperCase() + ' for ' + power1 + ' damage!');
    }, 8000)
    setTimeout(() => {
        console.log(name2.toUpperCase() + ' uses ' + move2.toUpperCase() + ' for ' + power2 + ' damage!');
    }, 12000)
    setTimeout(() => {
        if(power1 > power2) {
            console.log('Player1 wins!')
        } else if (power1 === power2) {
            console.log('It is a draw...')
        } else {
            console.log('Player2 wins!')
        }}, 16000)
    }


module.exports = gameDialogue;