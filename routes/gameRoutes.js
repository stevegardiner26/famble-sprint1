const mongoose = require('mongoose');
const Game = mongoose.model('games');

module.exports = (app) => {
  // Get  
  app.get(`/api/games`, async (req, res) => {
    let games = await Game.find();
    return res.status(200).send(games);
  });

  // Create
  app.post(`/api/games`, async (req, res) => {
    let game = await Game.create(req.body);
    return res.status(201).send({
      error: false,
      game
    })
  })

  // Update
  app.put(`/api/games/:id`, async (req, res) => {
    const {id} = req.params;

    let game = await Game.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      game
    })

  });

  // Delete
  app.delete(`/api/games/:id`, async (req, res) => {
    const {id} = req.params;

    let game = await Game.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      game
    })
  })

}