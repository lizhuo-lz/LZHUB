const Koa = require('Koa');
const bodyParse = require('koa-bodyparser'); //解析
const errorHandler = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();

// 方式二
app.useRoutes = useRoutes;

app.use(bodyParse())

// 方式一
// useRoutes(app);

// 方式二
app.useRoutes()
app.on('error', errorHandler)

module.exports = app;