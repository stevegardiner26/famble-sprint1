const { 
  getStatsByTeamID
} = require('./statisticRoutesHandlers');

module.exports = (app) => {
  // Get
  app.get('/api/stats/teams/team_id', getStatsByTeamID);
  
};
