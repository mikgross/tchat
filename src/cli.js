import arg from 'arg';

let room = 'world';

function parseArgs(rawArgs) {
    const args = arg(
        {
            '--create': String,
            '--join': String,
            '--stream': String,
            '-c': '--create',
            '-j': '--join',
            '-s': '--stream'
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        newRoom: args['--create'] || undefined,
        joinRoom: args['--join'] || undefined,
        streamRoom: args['--stream'] || room,
        message: args._[0]
    }
}

export function cli(args) {
    let options = parseArgs(args);
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
     ? Encryption at rest and on fly

     TODO Define decision tree when several args are set
     TODO Define prompts for specific Options
     TODO Define the backend and how to make sure this remains free/low-cost
     */
    console.log(options);
}