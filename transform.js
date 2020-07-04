const { createReadStream, createWriteStream } = require('fs')

const readable = createReadStream('files/upperCase.txt')
const writeable = createWriteStream('files/lowerCase.txt', { flags: 'w', encoding: 'utf8' })

const Tranform = require("stream").Transform

const lowerCase = new Tranform({
    transform(chunk, encoding, callback){
        const chunkLowerCase = (chunk+'').toLowerCase()
        this.push(chunkLowerCase)
        callback()
    }
})

readable.pipe(lowerCase).pipe(writeable)
