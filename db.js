const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/kunal';
const db = mongoose.connect(mongoUrl)
.then(()=>console.log("db  is connected")
)
.catch(()=>console.log("connections error")
);
module.exports = db;