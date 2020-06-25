const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbmongo:dbmongo@mongodb-l0cq2.mongodb.net/noderest?retryWrites=true&w=majority', { useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
