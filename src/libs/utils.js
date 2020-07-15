const arg = require('arg');

exports.parseArgs = (rawArgs) => {
    const args = arg(
        {
            '--create': String,
            '--join': String,
            '--stream': String,
            '--user': String,
            '-c': '--create',
            '-j': '--join',
            '-s': '--stream',
            '-u': '--user'
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        newRoom: args['--create'] || undefined,
        joinRoom: args['--join'] || undefined,
        stream: args['--stream'] ? true : false,
        message: args._[0] ? args._[0] : undefined
    }
}