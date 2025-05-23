const axios = require('axios');
const newsConfig = require('../config.json').news;

module.exports = async res => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${newsConfig.key}`);
        const articles = response.data.articles;
        if (articles && articles.length > 0) {
            const articlesCount = articles.length,
                randomIndex = Math.ceil(Math.random() * ((articlesCount - 1) - 0) + 0),
                article = articles[randomIndex].title;
            res.send({
                service: 'news',
                text: article
            });
        });
}
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).send({
            service: 'news',
            text: 'Error fetching news'
        });
    }
};