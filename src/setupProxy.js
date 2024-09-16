const { createProxyMiddleware } = require('http-proxy-middleware');

// "proxy": "http://26.0.163.162:8088",

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://26.0.163.162:8088',
      changeOrigin: true,
    })
  );
};