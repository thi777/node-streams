const { createWriteStream } = require('fs')

const writeable = createWriteStream('files/xml.js', { flags: 'w', encoding: 'utf8' })

writeable.write('<item>\n<name>Thiago Carvalho</name>\n<city>Mogi das Cruzes</city>\n</item>\n')
writeable.end('')




