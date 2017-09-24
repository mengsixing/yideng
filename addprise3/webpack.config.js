var Devwebpack = require('./config/webpack.dev.js');
var Prodwebpack = require('./config/webpack.prod.js');

switch (process.env.NODE_ENV) {
    case 'dev':
        module.exports = Devwebpack;
        break;
    case 'prod':
        module.exports = Prodwebpack;
        break;
    default:
        module.exports = Devwebpack;
        break;
}