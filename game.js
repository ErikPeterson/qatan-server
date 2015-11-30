'use strict';

const EventEmitter = require('events');
const utils = require('util');

const defaults = {
    players: {
        count: 3,
        placement: 'random'
    },
    pointsToWin: 10,
    lands: {
        desert: 1,
        hills: 3,
        pastures: 4,
        fields: 4, 
        mountains: 3,
        forests: 4,
        placement: 'random'
    }
};

const Game = function(key, options){
    EventEmitter.call(this);
    this.key = key;
    this.opts = Object.assign({}, defaults, options);
    this.connectedPlayers = 0;
    
    this.__buildBoard();
    this.__buildPlayers();

    Game.games[key] = this;
};

utils.inherits(Game, EventEmitter);

Game.prototype.__buildBoard = function(){

};

Game.prototype.__buildPlayers = function(){

};

Game.games = {};

module.exports = Game;