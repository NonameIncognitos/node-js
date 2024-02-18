
const cluster = require('cluster');
const os = require('os');


// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)

if (cluster.isPrimary){
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork();
        console.log("Run stil one the node js process")
    
    }
} else {
    console.log('Worker pid= ', process.pid, 'runned')

    setInterval(() => {
        console.log('Work pid ', process.pid, 'yell working')
    }, 5000)
}

