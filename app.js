const express = require('express');
const app = express();
const http = require('http');
var url = require('url');

app.set('view engine', 'ejs');
app.set('views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//extraire les liens d'une page web
// http.get("http://iamjmm.ovh/", function(res) {
//     console.log(res.statusCode);
//     res.setEncoding('utf8');
//     res.on('data', function(data) {
//         //console.log(data);
//         let text = data;
//         let pattern = /href="(.*?)"/g;
//         let result = text.match(pattern);
//         console.log(result);
//     });
// }).on('error', function(err) {
//     console.log(err);
// });

app.get('/', (req, res) => {
    //res.status(200).send('hello');
    res.status(200).render("accueil");
});
// app.get('/', (req, res) => {
//     let item = url.parse(req.url).query;
//     res.send(item);
// })
app.post('/notes', (req, res, next) => {
    let course = req.body.course;
    console.log(course);
    next();
})
app.use((req, res) => {
    res.status(404).render('page_introuvable');
});

app.listen('3001', (err) => {
    if (err)
        console.log(err);
});
console.log('serveur écoute le port 3001');