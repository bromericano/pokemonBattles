const pickPokemon = require('./utils/pickPokemon');
const moveInfo = require('./utils/move');
const gameDialogue = require('./utils/gameDialogue')

// player1 pokemon number
const choice1 = process.argv[2];
//player2 pokemon number
const choice2 = process.argv[3];
// check to make sure both numbers are within 1-800
if(!choice1 || choice1 < 1 || choice1 > 800 || !choice2 || choice2 < 1 || choice2 > 800) {
    console.log('Please enter a number between 1 and 800 for both players!')
} else {
    // gather data from API on player1's choice
    pickPokemon(choice1, (error, {name: name1, move: move1, moveURL: moveURL1}) => {
        if(error) {
            console.log('Error', error)
        } else {
            // gather data from API on player1's pokemon's move
            moveInfo(moveURL1, (error, {power: power1}) => {
                if(error) {
                    console.log('Error', error)
                } else {
                    // gather data from API on player2's choice
                    pickPokemon(choice2, (error, {name: name2, move: move2, moveURL: moveURL2}) => {
                        if(error) {
                            console.log('Error', error)
                        } else {
                            // gather data from API on player2's pokemon's move
                            moveInfo(moveURL2, (error, {power: power2}) => {
                                if(error) {
                                    console.log('Error', error)
                                } else {
                                    // change any null value powers to 0
                                    if(power1 === null) {
                                        power1=0;
                                    }
                                    if(power2 === null) {
                                        power2=0;
                                    }
                                    // run game dialogue 
                                    gameDialogue(name1, name2, move1, move2, power1, power2);
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}
