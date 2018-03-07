'use strict';

const unirest = require('unirest');
const quotesConfig = require('../config.json').quotes;

module.exports = res => {
    unirest
        .get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en')
        .end(response => {
            res.send({
                service: 'quote',
                text: response.body.quoteText,
                author: response.body.quoteAuthor
            });
        });
}