const { getBets, getBetsByGameID, postBets } = require('./betRoutesHandlersbetRoutesHandlers');
module.exports = (app) => {
  // Get
  app.get('/api/bets', getBets);
  app.get('/api/bets/:game_id', getBetsByGameID);

  // Create
  app.post('/api/bets', postBets);

  // // Update
  // app.put('/api/bets/:id', async (req, res) => {
  //   const { id } = req.params;
  //   const bet = await Bet.findByIdAndUpdate(id, req.body);
  //   return res.status(202).send({
  //     error: false,
  //     bet,
  //   });
  // });

  // // Delete
  // app.delete('/api/bets/:id', async (req, res) => {
  //   const { id } = req.params;

  //   const bet = await Bet.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     bet,
  //   });
  // });
};