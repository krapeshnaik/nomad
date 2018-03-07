const express = require('express');
const goNomad = require('./route_handlers/index.route');

const app = express();

app.get('/', goNomad);

app.listen(3000, () => {
    console.log('nomad @home:3000');
});