import express  from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { renameSync } from 'fs';

const app = express();
const port = 3000;
const validator = require('./validator');

app.set('views', path.join(__dirname, '../public/src/'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { message: "" });
});

app.post('/save', function(req, res) {
    const success = "Salvo com sucesso!";
    const validationError = validator(req.body);
    if(validationError != "") {
        res.render('index', { message: validationError });
    }
    res.render('index', { message: success });
});

app.listen(process.env.port || port);
console.log(`Your server is running on port: ${port}`);
