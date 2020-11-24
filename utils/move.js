const request = require('request');

const moveInfo = (selectedMove, callback) => {
    request({url: selectedMove, json: true}, (error, {body}) => {
        if(error) {
            callback('Error', undefined)
        } else {
            callback(undefined, {
                power: body.power
            })
        }
    })
}

module.exports = moveInfo;