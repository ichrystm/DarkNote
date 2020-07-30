
const express = require('express');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const connection = require('./database/database');
const notes = require('./database/notes');
const newnote = require('./routes/Newnote');

connection.authenticate()
.then(() => {
    console.log("Database connection successful.")
})
.catch((err) => {
    console.log("Database connection error " + err)
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    notes.findAll({raw: true, order:[['id', 'DESC']]})
    .then(notes => {
        res.render('index', {
            notes: notes
        });
    })
});

app.use('/newnote', newnote);


app.listen(port, () => {
    console.log("App online na porta " + port);
});