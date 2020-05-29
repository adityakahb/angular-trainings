const express = require('express');
const fetch = require('node-fetch');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(compression());
app.use('/vendor', express.static('vendor'));

let jsURLs = [
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'http://localhost:4100/vendor/js/jquery-accessibleMegaMenu.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js'
];
let cssURLs = [
    // 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/fontawesome.min.css',
    // 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/solid.min.css',
    // 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/brands.min.css',
    'http://localhost:4100/vendor/css/megamenu.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'
];
let fontsURLs = [
    'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
];

let jsText = '';
let cssText = '';
let fontsText = '';

app.listen(4100, () => {
    console.log('====Started CDN on port 4100====');
    Promise.all(jsURLs.map(u => fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.text()))
    ).then(t => {
        jsText = (t || []).join('\n');
    });
    Promise.all(cssURLs.map(u => fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.text()))
    ).then(t => {
        cssText = (t || []).join('\n');
    });
    Promise.all(fontsURLs.map(u => fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.text()))
    ).then(t => {
        fontsText = (t || []).join('\n');
    });
});

app.get('/jsbundle', (req, res) => {
    console.log('====Request for JS Bundle at ', new Date());
    res.type('.js')
    res.send(jsText);
});

app.get('/cssbundle', (req, res) => {
    console.log('====Request for CSS Bundle at ', new Date());
    res.type('.css')
    res.send(cssText);
});

app.get('/fontsbundle', (req, res) => {
    console.log('====Request for Fonts Bundle at ', new Date());
    res.type('.css')
    res.send(fontsText);
});