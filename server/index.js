import express  from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, '../public/src/'));
app.use(express.static(path.join(__dirname, '../dist')));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.listen(process.env.port || port);
console.log(`Your server is running on port: ${port}`);
