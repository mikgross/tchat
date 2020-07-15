import { machineId } from 'node-machine-id';
const needle = require('needle');

// get the machine identifier
exports.machineID = function() {
    return machineId({original: true});
}

// create a token in a server for authentication
exports.sessionToken = function(id) {
    return new Promise(resolve => {

        const data = {
            id: id
        };

        needle(
            'post',
            'https://tchat-cli-back.uc.r.appspot.com/getSessionToken',
            data,
            {json: true}
        )
        .then(res => resolve(res.body.token))
        .catch(() => resolve('error'))
    });
}
