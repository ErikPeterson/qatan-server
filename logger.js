'use strict';

const strftime = require('strftime');
const env = process.env.NODE_ENV || 'development';

module.exports = {
    log: function(str, level){
        let now = new Date();
        level = level || 'DEBUG'; 
        this[`${env}Log`](str, level, now);
    },
    developmentLog: function(str, level, now){
    	console.log(`[${level} @ ${this.timeStamp()}] ${str}`);
    },
    timeStamp: function(now){
    	return strftime('%d/%m/%Y-%H:%M:%S', now);
    }
};