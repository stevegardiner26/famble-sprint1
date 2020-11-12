var Client = require('node-rest-client').Client;
const mongoose = require('mongoose');
const Game = mongoose.model('games');

var client = new Client();

module.exports = (app) => {
  // Get
  app.get('/api/games', async (req, res) => {
    const games = await Game.find();
    return res.status(200).send(games);
  });

  // Create
  app.post('/api/games', async (req, res) => {
    const game = await Game.create(req.body);
    return res.status(201).send({
      error: false,
      game,
    });
  });


  app.get('/api/fetch_weekly_scores', async (req, res) => {
    // Get Current Season
    // Get Current Week
    // Fetch Scores and Update Games with new data
      //canceled: Boolean,
      //    status: String,
      //  away_score: Number,
      //home_score: Number
      // end_time
      // calculate winner and select wininer if status is Final
  });

  // Fetch Games From API
  // Ideally this is hit once a season to get the schedule
  app.get('/api/fetch_games', async (req, res) => {
    // Remove all games to prepare for the new game date

    client.get("https://api.sportsdata.io/v3/nfl/scores/json/UpcomingSeason", {headers: {"Ocp-Apim-Subscription-Key": process.env['NFL_API_TOKEN']}}, function (year, response) {
      client.get(`https://api.sportsdata.io/v3/nfl/scores/json/Schedules/${year}`, {headers: {"Ocp-Apim-Subscription-Key": process.env['NFL_API_TOKEN']}}, function (data, response) {
        // parsed response body as js object
        data.forEach(async (game) => {
          let current_game = await Game.findOne({game_id: game.GlobalGameID});
          if (!current_game) {
            let payload = {
              game_id: game.GlobalGameID,
              sport_type: "NFL",
              start_time: game.Date,
              away_team_id: game.GlobalAwayTeamID,
              home_team_id: game.GlobalHomeTeamID,
              canceled: game.Canceled,
              status: game.Status
            };
            await Game.create(payload);
          } else {
            let payload = {
              start_time: game.Date,          
              canceled: game.Canceled,
              status: game.Status
            };
            await Game.findOneAndUpdate({game_id: game.GlobalGameID}, payload);
          }
        });
      });
      return res.status(201).send({message: "Imported All Games!"});
    });
  });

  // Update
  app.put('/api/games/:id', async (req, res) => {
    const { id } = req.params;

    const game = await Game.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false, 
      game,
    });
  });

  // Delete
  app.delete('/api/games/:id', async (req, res) => {
    const { id } = req.params;

    const game = await Game.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      game,
    });
  });
};
