const mongoose = require('mongoose');

const db = async() => {
  await mongoose.connect('mongodb://127.0.0.1:27017/codetogether')
    .then(console.log('Connected to DB'))
    .catch(err => console.log(err));
};

module.exports = db;