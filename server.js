'use strict';

const logger = require('./utilities/logger.js');

const staticCache = require('koa-static-cache');
const koa = require('koa.io');
const path = require('path');
const fs = require('fs');

const app = koa();
const router = require('./router.js');
const port = process.env.PORT || 3000;

app.use(logger.accessLog)
	.use(router.routes())
  	.use(router.allowedMethods())
	.use(staticCache('./public'));

app.listen(port, ()=>logger.log(`Qatan Server started on port ${port}`));