const http = require('http');

const memory = {}

function add (path, callback) {
    memory[path] = callback
    console.log(memory)
}

const requestListener = function (req, res) {
    if (!memory[req.url]) return memory["404"](req, res)
    memory[req.url](req, res)
}

const server = http.createServer(requestListener);
module.exports = {
    init: (port) => server.listen(port),
    add: (path, callback) => add(path, callback)
}
