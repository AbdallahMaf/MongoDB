const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    birthDate: { 
        type: Date, 
        required: true 
    }, 
    adress: { 
        type: String, 
        required: true 
    }, 
    cours:[{
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
    }]
  });
  
module.exports = mongoose.model('Participants', participantSchema);
  