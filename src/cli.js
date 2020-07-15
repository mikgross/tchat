const auth = require('./libs/auth');
const fs = require('./libs/fs');
const utils = require('./libs/utils');

let token;
let machine;

export async function cli(args) {
    // get options
    let options = utils.parseArgs(args);
    console.log(options);
    
    if (!token) { // start a session with the server if not existing
        if (fs.hasTokenFile())  {
            token = fs.getToken();
        } else {
            machine = await auth.machineID(); // to create the session token
            token = await auth.sessionToken(machine); // token to be used for any request to the server to authenticate the machine
            fs.saveToken(token); // ! check this function's implementation for more todo
        }
    }

    // decision tree
    // we always prioritize the stream command since it will 
    // bloc all other abilities
    if (options.stream === true) { // start streaming from pub sub of current room
    } else if (options.joinRoom !== undefined) { // join room specified
    } else if (options.newRoom !== undefined) { // create a new chat room and join
    }

    // we always check for a new message to post to the current room
    if (options.message !== undefined) { }

    /* 
     * list of requirements:
     ! Being able to stream messages
     ! Being able to post messages
     ! Being able to create chat rooms
     ! Being able to join chat rooms
     ! Being able to authenticate the current session
     ! Being able to apply posting restrictions on users
     ! Being able to set current id
     ? Being able to filter content for unsafe content (pedo)

     TODO Define prompts for specific Options
     TODO Define the backend and how to make sure this remains free/low-cost
     */
}