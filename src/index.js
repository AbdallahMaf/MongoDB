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

const participant1 = async() => {
    try {
        const participant = await Participants.create({
            firstName: 'Omar',
            lastName: 'BA',
            birthDate: '1995-12-15', 
            adress: 'OUAKAM',
            label: 'Informatique Decisionnelle',
            volume: '40',
            startDate: '2021-12-05',


        });
        console.log(participant)
    } catch (e) {
        console.log(e.message);
        
    }
}

const participant2 = async() => {
    try {
        const participant = await Participants.create({
            firstName: 'Mariama',
            lastName: 'SOW',
            birthDate: '1998-10-07', 
            adress: 'POINT E',
        });
        console.log(participant)
    } catch (e) {
        console.log(e.message);
        
    }
}

const allcours = async() => {
    try {
        const cours = await Cours.find();
        console.log(cours)
        
    } catch (e) {
        console.log(e.message)
        
    }
}

const allparticipants = async() => {
    try {
        const participant = await Participants.find();
        console.log(participant)
        
    } catch (e) {
        console.log(e.message)
        
    }
}




const cours = async() =>{
    try{
        const cours =  await Cours.findById(
            {_id:'61b215212522742d733a06b4'
        });
    console.log(cours);
    }
    catch (e){
        console.log(e.message);
    }
}

const part1 = async() =>{
    try{
        const participant =  await Participants.findById(
            {_id:'61b21c206f7026acabc06b44'

        });
    console.log(participant);
    }
    catch (e){
        console.log(e.message);
    }
}

const part2 = async() =>{
    try{
        const participant =  await Participants.findById(
            {_id:'61b9ea05f32075db2beda0b3'

        });
    console.log(participant);
    }
    catch (e){
        console.log(e.message);
    }
}

connected();
//part1();
part2();
//cours();
//participant1();
//participant2();
//cours1();
//cours2();
//cours3();
//cours4();

//allcours();
//allparticipants();
