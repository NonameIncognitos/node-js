const { rejects } = require('assert')
const fs =require('fs')
const path = require('path')



// console.log('START')
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err)
//         return;
//     }

//     console.log('file created')
// })

// console.log('END')

//  FILE DELETE RM  

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {

//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '3 efv e ve fv ev ev', (err) => {
//     if (err) {
//         throw err;

//     }

//     console.log('text successfully written')



// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), '/evev  erer  erer ee', (err) => {

//     if(err){
//         throw err;

//     }

//     console.log('the text was successfully written to the test.txt file')
// })




const writeFileAsync = async (path, data) => {
    return new Promise( (resolve, reject) => fs.writeFile(path, data,  (err) => {
        if (err) {
            return reject(err.message)
        }

        resolve()
    }))
}


const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        }

        resolve()
    }))
}

const readFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message);
        }

        resolve(data)
    }))
}

const removeFileAsync = async (filePath) => {
    return new Promise((resolve, reject) => fs.unlink(filePath, (err) => {
        if (err) {
            return reject(err.message);
        }

        resolve()
    }))
}


const filePath = path.resolve(__dirname, 'test.txt')
// writeFileAsync(filePath, 'data')
//     .then(() => appendFileAsync(filePath, '123'))
//     .then(() => appendFileAsync(filePath, '234'))
//     .then(() => appendFileAsync(filePath, '456'))
//     .then(() => readFileAsync(filePath))

//     .then(data => console.log(data))
//     .catch(err => console.log(err))

removeFileAsync(filePath)
    .then(() => console.log('file was removed'))
    .catch(err => console.log(err))