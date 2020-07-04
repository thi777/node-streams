const { createReadStream, createWriteStream } = require('fs')
const zlib = require('zlib')

const readable = createReadStream('files/file.zip')
const writeable = createWriteStream('files/file3.txt', { flags: 'w', encoding: 'utf8' })

const zip = zlib.createUnzip()

readable.pipe(zip).pipe(writeable)