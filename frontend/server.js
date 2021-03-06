/* eslint-disable no-console */
const path = require('path');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.SERVER_PORT;

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, 'build/'));
app.use(express.static(path.resolve(__dirname, 'build/')));
app.use(compression());
app.use(helmet());
app.use(cors());

/** Security */
app.disable('x-powered-by');

app.use('/api', createProxyMiddleware({
    target: 'http://walmart_backend:4000/',
    changeOrigin: true
}));

/** Routes */
app.get('*', (req, res) => {
  res.render('index.html');
});


app.listen(PORT);

console.log(`PUERTO : ${PORT}`);
console.log('Server ONLINE');