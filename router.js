'use strict';

const Game = require('./game.js');
const koabody = require('koa-body')();
const utils = require('util');
const tokens = require('./utilities/tokens.js');
const logger = require('./utilities/logger.js');
const sanitizer = require('./utilities/sanitizer.js')
const router = require('koa-router')();


router.post('/games', koabody, function *(next){
	let options = 'game' in this.request.body ? sanitizer.game.create(this.request.body.game) : {};
	let token = yield tokens.createToken();
	let hostToken = yield tokens.createToken();
	let game = new Game(token, options);

	this.body = JSON.stringify(game);
});

module.exports = router;
