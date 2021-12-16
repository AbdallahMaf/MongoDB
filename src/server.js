const express = require('express');
const ParticipantsServ = require('./services/participantsServ');
const CoursServ = require('./services/coursServ');
const DBServ = require('./services/DB');

app = express();

DBServ.DBconnect();

//GET participants and GET id participant
app.get('/participant', ParticipantsServ.getAllParticipants);
app.get('/participant', ParticipantsServ.getIdParticipant);

//GET Cours and GET id cours
app.get('/cours', CoursServ.getAllCours);
app.get('/cours', CoursServ.getIdCours);

app.listen(3000, () => console.log('Server Listening on port 3000'));

