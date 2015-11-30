'use strict';

const strftime = require('strftime');
const env = process.env.NODE_ENV || 'development';
const Logger = {
    log: function(str, level){
        let now = new Date();
        level = level || 'DEBUG'; 
        Logger[`${env}Log`](str, level, now);
    },
    developmentLog: function(str, level, now){
    	console.log(`[${level} @ ${this.timeStamp()}] ${str}`);
    },
    timeStamp: function(now){
    	return strftime('%d/%m/%Y-%H:%M:%S', now);
    },
    accessLog: function *(next){
        Logger.log(`${this.request.method} ${this.request.url}`);
        yield next;
    }
};

module.exports = Logger;