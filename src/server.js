const express = require('express');
const ParticipantsServ = require('./services/participantsServ');
const CoursServ = require('./services/coursServ');
const DBServ = require('./services/DB');


app = express();

DBServ.DBconnect();

app.get('/participant', ParticipantsServ.getAllParticipants)

app.get('/cours', CoursServ.getAllCours)

app.listen(3000, () => console.log('Server Listening on port 3000'));

