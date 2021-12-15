const mongoose = require('mongoose');

const coursSchema = new mongoose.Schema({
    label: { 
        type: String, 
        required: true 
    },
    volume: { 
        type: Number, 
        required: true 
    },
    startDate: { 
        type: Date, 
        required: true 
    },  
  });
  
module.exports = mongoose.model('Cours', coursSchema);
  