const mongoose = require('mongoose');

const DBconnect = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongooose_db');
        console.log('connected to the DATABASE');
        
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = {
    DBconnect
}