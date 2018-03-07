const express = require('express');
const goNomad = require('./services');

const app = express();

app.get('/', goNomad);

app.listen(5555, () => {
    console.log('go nomad @5555');
});