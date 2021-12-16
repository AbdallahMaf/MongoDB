const mongoose = require('mongoose');
const Cours = require ('../models/cours');

//GET Cours
const getAllCours = async (req, res) =>{
    try {
        const cours = await Cours.find();
        res.json(cours)
        
    } catch (error) {
        console.log(error.message);
    }
}

//GET Id Cours
const getIdCours = async(req, res) => {
    try {
        const cours = await Cours.findById({
            _id:"61bb60a489916fa86bf2aeb6"});
        res.json(cours);
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAllCours,
    getIdCours
}