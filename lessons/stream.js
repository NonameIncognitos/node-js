const fs = require('fs');
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'main.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'main.txt'), {encoding: 'hex'})

// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// stream.on('end', () => console.log("Finishing reads"))
// stream.on('open', () => console.log("Starting reads"))
// stream.on('error', (e) => console.log(e))


const filePath = path.resolve(__dirname, 'main2.txt')

// const writableStream = fs.createWriteStream(filePath)

// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');

// }



// writableStream.close()

// const http = require('http');

// http.createServer((req, res) => {
//     const stream = fs.createReadStream(path.resolve(__dirname, 'main.txt'));

//     // stream.on('data', chunk => res.write(chunk))
//     stream.pip(res)
// })


