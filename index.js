const path = require('path')
const fs = require('fs')
const { count } = require('console')



const writeFileAsyncs = async (path, data) => {
    return new Promise( (resolve, reject) => fs.writeFile(filePath, data, (err) => {
        if (err) {
            return reject(err.message)
        }

        resolve()

    }))

    
}

const readFileAsyncs = async(filePath) => {
    return new Promise( (resolve, reject) => fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message);
        }

        resolve(data)
    }))
};

const writeFileAsyncCout = async(path, datas) => {
    return new Promise( (resolve, reject) => fs.writeFile(filePathc, datas, (err) => {
        if (err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const removeFileAsyncs = async (filePath) => {
    return new Promise( (resolve, reject) => fs.unlink(filePath, (err) => {
        if (err) {
            return reject(err.message)
        }

        resolve()
        console.log("file deleted")
    }))
}
const text = '12345678910 sfg sd fg sd fg sd'
const filePath = path.resolve(__dirname, 'test.txt')
const filePathc = path.resolve(__dirname, 'count.txt')

let globals;
writeFileAsyncs(filePath, 'data')
    .then(() => writeFileAsyncs(filePath, text))
    .then(() => readFileAsyncs(filePath))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsyncCout(filePath, `kol-vo ${count}` ))
        

    
    .then(() => removeFileAsyncs(filePath))
    .catch(err => console.log(err))

