const mongoose = require('mongoose');
const Cours = require('./models/cours');
const Participants = require('./models/participant');

const connected = async () => {
    try {
        await mongoose.connect('mongodb://localhost/mongooose_db');
        console.log('connected to the DATABASE');
        
    } catch (e) {
        console.error(e.message);
        
    }
}

const cours1 = async() => {
    try {
        const cours = await Cours.create({
            label: 'HTML',
            volume: '30',
            startDate: '2021-02-12',
        }); 
        console.log(cours)  
    } 
    catch(e) {
       console.log(e.message); 
    }
}
//cours1();
const cours2 = async() => {
    try {
        const cours = await Cours.create({
            label: 'JavaScript',
            volume: '40',
            startDate: '2021-12-15',
            
        }); 
        console.log(cours)  
    } 
    catch(e) {
       console.log(e.message); 
    }
}
//cours2();
const cours3 = async() => {
    try {
        const cours = await Cours.create({
            label: 'Mongoose',
            volume: '40',
            startDate: '2021-02-12',
            
        }); 
        console.log(cours)  
    } 
    catch(e) {
       console.log(e.message); 
    }
}
//cours4();
const cours4 = async() => {
    try {
        const cours = await Cours.create({
            label: 'Informatique Decisionnelle',
            volume: '60',
            startDate: '2021-02-12',
            
        }); 
        console.log(cours)  
    } 
    catch(e) {
       console.log(e.message); 
    }
}
//cours4();

const participant1 = async() => {
    try {
        const participant = await Participants.create({
            firstName: 'Mariama',
            lastName: 'SOW',
            birthDate: '1998-10-07', 
            adress: 'POINT E',
            cours:[{
                label: 'HTML',
                volume: 30,
                startDate: '2021-02-12'}]
        });
        console.log(participant)
    } catch (e) {
        console.log(e.message);
        
    }
}
//participant1();

const participant2 = async() => {
    try {
        const participant = await Participants.create({
            firstName: 'Mohamed Ahmad',
            lastName: 'DIOP',
            birthDate: '1998-01-06', 
            adress: 'FANN-HOCK',
            cours:[{
                label: 'Informatique Decisionnelle',
                volume: 60,
                startDate: '2021-02-12'}]
        });
        console.log(participant)
    } catch (e) {
        console.log(e.message);
        
    }
}
//participant2();

const participant3 = async() => {
    try {
        const participant = await Participants.create({
            firstName: 'Fatoumata Bintou',
            lastName: 'Ndiaye',
            birthDate: '1995-03-27', 
            adress: 'MARISTE',
            cours:[{
                label: 'Mongoose',
                volume: 40,
                startDate: '2021-02-12'}]
        });
        console.log(participant)
    } catch (e) {
        console.log(e.message);
        
    }
}
//participant3();

const participant4 = async() => {
    try {
        const participant = await Participants.create({
            firstName: 'Mouhamadou Momar',
            lastName: 'FALL',
            birthDate: '1997-01-15', 
            adress: 'CITE KEUR GORGUI',
            cours:[{
                label: 'JavaScript',
                volume: 40,
                startDate: '2021-02-12'}]
        });
        console.log(participant)
    } catch (e) {
        console.log(e.message);
        
    }
}
//participant4();


const allcours = async() => {
    try {
        const cours = await Cours.find();
        console.log(cours)
        
    } catch (e) {
        console.log(e.message)
        
    }
}
//allcours();

const allparticipants = async() => {
    try {
        const participant = await Participants.find();
        console.log(participant)
        
    } catch (e) {
        console.log(e.message)
        
    }
}
//allparticipants();

const coursHTML = async() =>{
    try{
        const cours =  await Cours.findById(
            {_id:'61bb60a489916fa86bf2aeb6'
        });
    console.log(cours);
    }
    catch (e){
        console.log(e.message);
    }
}
coursHTML();

const partHTML = async() =>{
    try{
        const participant =  await Participants.findById(
            {_id:'61bb71bcb8b6babacd16aa5f'

        });
    console.log(participant);
    }
    catch (e){
        console.log(e.message);
    }
}
partHTML();

connected();