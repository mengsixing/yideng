import path from 'path';
const config = new Map();

config.set('port',5000);
config.set('staticDir',path.join(__dirname,'../','public'));
config.set('viewDir',path.join(__dirname,'../','views'));


export default config;