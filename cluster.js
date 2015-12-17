'use strict';
var recluster = require('recluster');
var fs = require('fs');
var path = require('path');
var debounce = require('debounce');

var cluster = recluster(path.join(__dirname, 'server.js'), { workers: 1 });
cluster.run();

if(require('cluster').isMaster) {
    fs.watch(__dirname, { persistent: false }, debounce(function(event, filename) {
        console.log('File change detected. Reloading.');
        cluster.reload();
    }, 1500)).on('error', function(err){
        console.log('Error listening for file changes at: ' + err);
    });
}

console.log("spawned cluster, kill -s SIGUSR2", process.pid, "to reload");
