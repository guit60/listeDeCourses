const express = require('express');
const app = express();
const http = require('http');


app.get('/', (req, res) => {
    res.status(200).send('hello');
})


app.listen('3001', (err) => {
    if (err)
        console.log(err);
});
console.log('serveur écoute le port 3001');