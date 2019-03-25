import express  from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongo from 'mongodb';

require('dotenv').config()
const app = express();
// Custom Classes
const validator = require('./validator');
const Topic = require('./db/topic').Topic;
const TopicEnum = require('./enum/TopicEnum').TopicEnum;

app.set('views', path.join(__dirname, '../dist/views/'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { message: '' });
});

app.post('/save', function(req, res) {
    const success = "Salvo com sucesso!";
    const validationError = validator(req.body);
    if(validationError != "") {
        res.render('index', { message: validationError });
    } else {
        mongo.MongoClient.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        }, function(err, client) {
            if(err) console.log(err);
            const db = client.db('fejers');
            const entity = new Topic(req, TopicEnum[req.body.topic]).entity;
            db.collection('bot').insertOne(entity, function(err, result) {
                if(err) return console.log(err)
                res.render('index', { message: success });
            });
            client.close();
        });
    }
});

app.listen(process.env.port);
console.log(`Your server is running on port: ${process.env.port}`);