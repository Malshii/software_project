const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({  
  description: {
    type: String,
    minlength: 5,
    maxlength: 50,
  },
  date: {
    type: Date,    
  },  
});

const Schedule = mongoose.model('schedule', scheduleSchema);
module.exports = Schedule;
