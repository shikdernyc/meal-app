let envPath = __dirname.substr(0, __dirname.lastIndexOf('/'));
require('dotenv').config({ path: `${envPath}/.env` });

const mongoose = require('mongoose');
mongoose.set('debug', process.env.DEBUG || true);
mongoose.Promise = Promise;

function connectToDB(){
  return new Promise((resolve, reject)=>{
    const connect = () =>{
      mongoose.connect(process.env.MONGODB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectInterval: 1000
      });
    };
    
    if (process.env.NODE_ENV !== 'test') {
      let reconnect = setInterval(connect, 1000);
    
      mongoose.connection.on('error', err => {
        reject(err)
      });
    
      mongoose.connection.once('open', function() {
        // console.log('db connected');
        clearInterval(reconnect);
        resolve();
      });
    }
  })
}

module.exports = {
  connectToDB,
  Food: require('./Food')
};
