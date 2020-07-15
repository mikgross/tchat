const fs = require('fs');

exports.hasTokenFile = () => {
    const exists = fs.existsSync('./files/token.json');
    return exists;
}

exports.getToken = () => {
    const file = fs.readFileSync('./files/token.json');
    console.log(file);
    return file;
}

exports.saveToken = (token) => {
    // TODO build the path from the filesystem --> check how to mae this for
    // TODO -- Windows
    // TODO -- Linux
    // TODO -- Mac
    fs.writeFileSync('token.txt', token);
}