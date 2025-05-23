const axios = require('axios');
const quotesConfig = require('../config.json').quotes;

module.exports = async res => {
    try {
        const response = await axios.get(`http://api.forismatic.com/api/1.0/?method=getQuote&key=${quotesConfig.key}&format=json&lang=en`);
        res.send({
            service: 'quote',
            text: response.data.quoteText,
            author: response.data.quoteAuthor
        });
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).send({ service: 'quote', error: 'Failed to fetch quote' });
    }
}