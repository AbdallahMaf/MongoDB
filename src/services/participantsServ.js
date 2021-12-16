const mongoose = require('mongoose');
const Participants = require ('../models/participant');

//GET Participants
const getAllParticipants = async (req, res) =>{
    try {
        const participant = await Participants.find();
        res.json(participant)
        
    } catch (error) {
        console.log(error.message);
    }
}

//GET Id Participant
const getIdParticipant = async(req, res) =>{
    try {
        const participant = await Participants.findById({
            _id:"61bb71bcb8b6babacd16aa65"});
        res.json(participant)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllParticipants,
    getIdParticipant
}