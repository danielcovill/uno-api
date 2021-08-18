'use strict';

const controller = require('./game.controller');

module.exports = Router => {
    const router = new Router({
        prefix: `/games`,
    });

    router
        .get('/:gameId', controller.getOne)
        .get('/', controller.getAll)
        .post('/', controller.createOne);

    return router;
};