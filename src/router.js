const gameController = require('./controllers/gameController');

module.exports = (app) => {
  app.post('/game', gameController.create);
  app.get('/game', gameController.listAll);
  app.get('/game/:id', gameController.findById);
  app.put('/game/:id', gameController.update);
  app.delete('/game/:id', gameController.delete);

};