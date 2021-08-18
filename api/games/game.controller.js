'use strict';

const generateId = require('../../utils/generateId.util');

/**
 * Mock database, replace this with db models import, required to perform query to database.
 */
const db = {
    games: [
        {
            gameId: 'bff28903-042e-47c2-b9ee-07c3954989ec',
            name: 'Ronald\'s game',
            status: 'Not Started',
            deckCount: 98,
            discardPile: [],
            players: [{ seatPosition: 1, name: 'Anderson', cardCount: 0 }]
        },
        {
            gameId: 'aff28903-072e-47c2-b9ee-07c3954989ec',
            name: 'silly game',
            status: 'In Progress',
            deckCount: 86,
            discardPile: [{ value: '0', color: 'red' }],
            players: [{ seatPosition: 1, name: 'Anderson', cardCount: 10 }, { seatPosition: 2, name: 'Sarah', cardCount: 2 }]
        },
        {
            gameId: 'cff28903-042e-47c2-b9ee-07c3954989ec',
            name: 'No girls allowed',
            status: 'In Progress',
            deckCount: 79,
            discardPile: [{ value: 'Draw 4', color: 'wild' }],
            players: [{ seatPosition: 1, name: 'Anderson', cardCount: 6 }, { seatPosition: 2, name: 'Ugly', cardCount: 13 }]
        },
    ],
};

exports.getOne = ctx => {
    const { gameId } = ctx.params;
    const game = db.games.find(game => game.id === gameId);
    ctx.assert(game, 404, "The requested game doesn't exist");
    ctx.status = 200;
    ctx.body = game;
};

exports.getAll = async ctx => {
    if (db.games.length > 0) {
        ctx.status = 200;
        ctx.body = db.games;
    } else {
        ctx.status = 204;
        ctx.body = {};
    }
};

exports.createOne = async ctx => {
    const { name, playerCount } = ctx.request.body;
    ctx.assert(name, 400, 'The game info is malformed!');
    ctx.assert(playerCount, 400, 'The game info is malformed!');
    const id = generateId();
    const newGame = {
        id,
        name,
        playerCount
    };
    db.games.push(newGame);
    ctx.status = 201;
    ctx.body = { gameId: id };
};