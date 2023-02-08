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
    res.status(300).render("accueil");
});
app.post('/notes', (req, res) => {
    let course = req.body.course;
    console.log(course);
    res.status(300).redirect("/");
})
app.use((req, res) => {
    res.status(404).render('page_introuvable');
});

app.listen('3001', (err) => {
    if (err)
        console.log(err);
});
console.log('serveur écoute le port 3001');