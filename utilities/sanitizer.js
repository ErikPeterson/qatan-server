const _ = require('lodash');

module.exports = {
    game: {
        create: function(opts){
            opts = _.pick(opts, 'players');
            opts.players = _.pick(opts.players, 'count', 'placement');

            return opts;
        }   
    }
}