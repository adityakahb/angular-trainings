const express = require('express');
const fetch = require('node-fetch');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(compression());
app.use('/vendor', express.static('vendor'));

let jsURLs = [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'http://localhost:4100/vendor/js/jquery-accessibleMegaMenu.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.4.0/umd/popper.min.js',
    // 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/stickybits/3.7.7/stickybits.min.js'
];
let cssURLs = [
    'http://localhost:4100/vendor/css/megamenu.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'
];
let fontsURLs = [
    // 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
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