let envPath = __dirname.substr(0, lastIndexOf('/'));
require('dotenv').config({ path: `${envPath}/.env` });

const mongoose = require('mongoose');
mongoose.set('debug', process.env.DEBUG || true);
mongoose.Promise = Promise;

const connect = () => {
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
    console.log(err);
  });

  mongoose.connection.once('open', function() {
    console.log('db connected');
    clearInterval(reconnect);
  });
}

module.exports = {
  User: require('./User')
};