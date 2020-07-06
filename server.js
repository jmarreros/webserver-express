require('./hbs/helpers');
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

// Para redireccionar a la página estática
app.use( express.static(__dirname + '/public') );

// Express Hbs engine template
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
    res.render('home', {
        nombre:'jhon marreros'
    });
});


app.get('/about',  (req, res) => {
    res.render('about');
});


// app.get('/data',  (req, res) => {
//     res.send('Hola Data!!');
// });


app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
})

