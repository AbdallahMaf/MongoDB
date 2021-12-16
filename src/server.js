const mongoose = require('mongoose');
const ParticipantsServ = require('./services/participantsServ');
const CoursServ = require('./services/coursServ');

app = express();


const DBconnected = async () => {
    try {
        await mongoose.connect('mongodb://localhost/mongooose_db');
        console.log('connected to the DATABASE');
        
    } catch (e) {
        console.error(e.message);
        
    }
}

DBconnected();