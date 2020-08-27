const cpus = require('os').cpus();
const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
    console.log(`Proess running from master - ${process.pid}`);
    for (let i = 1; i < cpus.length; i++) {
        cluster.fork();
    }
    cluster.on('exit', worker => {
        console.log(`Died Process - ${process.pid}`);
        // console.log(`Remaining Process - ${Object.keys(cluster.workers).length}`);
        console.log(`New Process is creating`);
        cluster.fork();
    })
} else {
    console.log(`Proess running from worker - ${process.pid}`);
    http.createServer((req, res) => {
        res.end(`Runing on proess: ${process.pid}`);
        if (req.url === '/kill') {
            process.exit();
        } else if (req.url === '/') {
            console.log(`serving from: ${process.pid}`)
        }
    }).listen(3000)
}