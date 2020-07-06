const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto)=>{
    let words = texto.split(' ');
    words.forEach( (word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
});