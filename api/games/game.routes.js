'use strict';

const controller = require('./game.controller');

module.exports = Router => {
    const router = new Router({
        prefix: `/games`,
    });

    router
        .get('/:gameId', controller.getGame)
        .get('/', controller.getAllGames)
        .post('/', controller.createGame)

        .post('/:gameId/deck', controller.pullCard);

    return router;
};