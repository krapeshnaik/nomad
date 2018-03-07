'use strict';

const Twitter = require('twitter');
const twitterConfig = require('../config.json').twitter;

module.exports = res => {
    const twitterClient = new Twitter(Object.assign({}, twitterConfig));

    twitterClient
        .get('https://api.twitter.com/1.1/trends/place.json?id=23424848', (error, trends, response) => {
            if (!error) {
                // Get top 5 topics
                if (trends[0].trends.length) {
                    getTweetsForTopTrends(trends[0].trends.slice(0, 5));
                }
            }
        });

    const getTweetsForTopTrends = topFiveTrends => {
        let randomIndex = Math.ceil(Math.random() * (4 - 0) + 0),
            topic = topFiveTrends[randomIndex].name;

        twitterClient
            .get('https://api.twitter.com/1.1/search/tweets.json?q=' + encodeURIComponent(topic), (error, tweets, response) => {
                if (!error) {
                    res.send({
                        service: 'twitter',
                        text: tweets.statuses[0].text
                    });
                }
            });
    }
}