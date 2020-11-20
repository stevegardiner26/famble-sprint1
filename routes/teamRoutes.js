const { 
    getTeams,
    getTeamById,
    fetchTeams  
} = require('./teamRoutesHandlers');

module.exports = (app) => {
    app.get('/api/teams', getTeams);
    app.get('/api/teams/:id', getTeamById); 
    // Ideally this is hit once a season to get the teams
    app.get('/api/fetch_teams', fetchTeams)
}