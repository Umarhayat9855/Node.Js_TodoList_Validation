const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  if(!config.has('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
  }
  const db = config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}