const pickPokemon = require('./utils/pickPokemon');
const moveInfo = require('./utils/move');

let player1 = 1000;
let player2 = 1000;

const choice = process.argv[2];
if(!choice || choice < 1 || choice > 800) {
    console.log('Please enter a number between 1 and 800!')
} else {
    pickPokemon(choice, (error, {name, move, moveURL}) => {
        if(error) {
            console.log('Error', error)
        } else {
            moveInfo(moveURL, (error, {power}) => {
                if(error) {
                    console.log('Error', error)
                } else {
                    console.log('You have chosen: ' + name.toUpperCase() + '. ' + name.toUpperCase() + ' uses ' + move.toUpperCase() + ' for ' + power + 'damage!!')
                    player2 -= power;
                    console.log('Player2 has ' + player2 + ' HP left!')
                }
            })
        }
    })
}
