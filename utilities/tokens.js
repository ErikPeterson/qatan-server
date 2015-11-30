const Q = require('q');
const crypto = require('crypto');
const randomBytes = Q.nfbind(crypto.randomBytes);

module.exports = {
    createToken: function(n){
        return randomBytes(n).then(function(b){return b.toString('hex');});
    }
};