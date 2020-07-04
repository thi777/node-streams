const { createReadStream } = require('fs')

const readable = createReadStream('files/file.txt')

readable.on("data", (chunk) => {
    console.log(chunk.toString())
    readable.pause()
    setTimeout(() => readable.resume(), 1000)
})