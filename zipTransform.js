const { createReadStream, createWriteStream } = require('fs')
const zlib = require('zlib')

const readable = createReadStream('files/file.txt')
const writeable = createWriteStream('files/file.zip', { flags: 'w', encoding: 'utf8' })

const zip = zlib.createGzip()

readable.pipe(zip).pipe(writeable)