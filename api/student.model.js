const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
  student_name: {
    type: String
  },
  department_name: {
    type: String
  },
  roll_number: {
    type: Number
  }
},{
    collection: 'student'
});

module.exports = mongoose.model('Student', Student);