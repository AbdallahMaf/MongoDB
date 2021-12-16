const mongoose = require('mongoose');
const Participants = require ('../models/participant');

const getAllParticipants = async (req, res) =>{
    try {
        const participant = await Participants.find();
        res.json(participant)
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllParticipants
}