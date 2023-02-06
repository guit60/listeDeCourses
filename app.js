const express = require('express');
const app = express();
const http = require('http');


app.set('view engine', 'ejs');
app.set('views');

app.get('/', (req, res) => {
    //res.status(200).send('hello');
    res.status(200).render("accueil");
});
app.use((req, res) => {
    res.status(404).render('page_introuvable');
});

app.listen('3001', (err) => {
    if (err)
        console.log(err);
});
console.log('serveur écoute le port 3001');