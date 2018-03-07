const twitter = require('./twitter'),
    news = require('./news'),
    quotes = require('./quotes');

module.exports = (req, res) => {
    // Decide what to call
    const services = [twitter, news, quotes],
        randomIndex = Math.round(Math.random() * (2 - 0) + 0);

    const data = services[randomIndex](res);
}