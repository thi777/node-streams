const net = require('net')
const readline = require('readline')

if (process.argv[process.argv.length - 1] === 'server') {
    const server = net.createServer((socket) => {
        socket.on('data', (data) => {
            socket.write(data)
            console.log('' + data)
        })
    })

    server.listen('3777', '127.0.0.1')
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const client = new net.Socket()

client.connect(3777, '127.0.0.1', () => {
    console.log('connected')
    client.write("hello socket ")
    rl.addListener('line', (line) => client.write(line))
})

client.on('data', (data) => console.log('received: ' + data))
client.on('close', () => console.log('connection closed'))

