const mongoose = require('mongoose');
const Cours = require ('../models/cours');

const getAllCours = async (req, res) =>{
    try {
        const cours = await Cours.find();
        res.json(cours)
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllCours
}