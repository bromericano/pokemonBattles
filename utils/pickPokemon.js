const request = require('request');


const pickPokemon = (choice, callback) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'+ choice + '/';
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Error', undefined);
        } else {
            callback(undefined, {
                name: body.forms[0].name,
                move: body.moves[0].move.name,
                moveURL: body.moves[0].move.url
            })
        }
    })
}

module.exports = pickPokemon;