const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  email: {
    type: String,
    required: true,
    unique: true
},
work: {
  type: String,
  enum: ['chief', 'waiter', 'manager'],
  required: true
}
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;