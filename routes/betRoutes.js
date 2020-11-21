const { 
  getBets, 
  getBetsByGameID, 
  postBets, 
  putBets,
  getBetsByUserID, 
  deleteBets 
} = require('./betRoutesHandlers');

module.exports = (app) => {
  // Get
  app.get('/api/bets', getBets);
  app.get('/api/bets/users/:user_id', getBetsByUserID);
  app.get('/api/bets/:game_id', getBetsByGameID);
  
  // Create
  app.post('/api/bets', postBets);

  // Update
  app.put('/api/bets/:id', putBets);

  // Delete
  // app.delete('/api/bets/:id', deleteBets);
};