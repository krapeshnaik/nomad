const unirest = require('unirest');
const newsConfig = require('../config.json').news;

module.exports = res => {
    unirest
        .get('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=' + newsConfig.key)
        .end(response => {
            const articlesCount = response.body.articles.length,
                randomIndex = Math.ceil(Math.random() * ((articlesCount - 1) - 0) + 0),
                article = response.body.articles[randomIndex].title

            res.send({
                service: 'news',
                text: article
            });
        });
}