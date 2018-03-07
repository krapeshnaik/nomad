const express = require('express');
const goNomad = require('./services');

const app = express();

app.get('/', goNomad);

app.listen(3000, () => {
    console.log('go nomad @5555');
});