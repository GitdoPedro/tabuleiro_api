const sequelize = require('../db');
const createGameModel  = require('../models/game');
const Game = createGameModel (sequelize, sequelize.Sequelize.DataTypes);

module.exports = {
    //3a. Criação:
    async create(req, res) {
        try {
            const game = await Game.create(req.body);
            return res.status(201).json(game);
        } catch (error) {
            console.error(error);
            return res.status(400).json(
                { error: 'Failed to create the game', details: error.message });
        }
    },
    //3b. Leitura
    async listAll(req, res) {
        try {
            const games = await Game.findAll();
            res.status(200).json(games);
        } catch (error) {
            res.status(500).json(
                { message: 'Error retrieving games', error });
        }
    },
    //3b. Leitura
    async findById(req, res) {
        try {
            const game = await Game.findByPk(req.params.id);
            if (game) {
                res.status(200).json(game);
            } else {
                res.status(404).json(
                    { message: 'Game not found' });
            }
        } catch (error) {
            res.status(500).json(
                { message: 'Error retrieving game', error });
        }
    },
    //3c. Atualização
    async update(req, res) {
        try {
            const updatedGame = await Game.update(req.body, {
                where: { id: req.params.id },
            });
            if (updatedGame[0]) {
                res.status(200).json(
                    { message: 'Game updated successfully' });
            } else {
                res.status(404).json(
                    { message: 'Game not found' });
            }
        } catch (error) {
            res.status(500).json(
                { message: 'Error updating game', error });
        }
    },
    //3d. Exclusão
    async delete(req, res) {
        try {
            const deletedGame = await Game.destroy({ where: { id: req.params.id } });
            if (deletedGame) {
                res.status(200).json({ message: 'Game deleted successfully' });
            } else {
                res.status(404).json({ message: 'Game not found' });
            }
        } catch (error) {
            res.status(500).json(
                { message: 'Error deleting game', error });
        }
    }
};