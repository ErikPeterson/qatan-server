'use strict';

const Game = require('./game.js');
const logger = require('./logger.js');

const staticCache = require('koa-static-cache');
const koa = require('koa.io');
const path = require('path');
const fs = require('fs');

const app = koa();
const port = process.env.PORT || 3000;

app.use(staticCache(path.join(__dirname, 'public')));

app.listen(port, ()=> logger.log(`Qatan Server started on port ${port}`));