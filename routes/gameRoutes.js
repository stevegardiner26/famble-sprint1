const { 
  getGames,
  getGameById,
  fetchWeeklyScores,
  fetchGames,
  updateGameById,
  deleteGameById  
} = require('./gameRoutesHandlers');

module.exports = (app) => {
  // Get
  app.get('/api/games', getGames);
  app.get('/api/games/:id', getGameById);
  app.get('/api/fetch_weekly_scores', fetchWeeklyScores);

  // Fetch Games From API
  // Ideally this is hit once a season to get the schedule
  app.get('/api/fetch_games', fetchGames);

  // Update
  app.put('/api/games/:id', updateGameById);

  // Delete
  app.delete('/api/games/:id', deleteGameById)
};
