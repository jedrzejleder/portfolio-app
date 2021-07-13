const express = require('express');
const app = express();
const cors = require('cors');

const data = require('./json/data.json');
const aboutMe = require('./json/aboutMe.json');

app.use(cors());

app.get('/aboutMe', (req, res) => {
    res.send(aboutMe);
});

app.get('/slider', (req, res) => {
    res.send(data);
});

app.listen(3000, () => console.log('Listening on port 3000...'));