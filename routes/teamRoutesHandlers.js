var Client = require('node-rest-client').Client;
var client = new Client();
const mongoose = require('mongoose');
const Team = mongoose.model('teams');

// app.get('/api/teams', getTeams) 
async function getTeams(req, res){
    const teams = await Team.find();
    return res.status(200).send(teams);
}

// app.get('/api/teams/:id', getTeamById) 
async function getTeamById(req,res){
    const team_id = req.params.id;
    let teamInfo = await Team.find({
        team_id: team_id
    });
    return res.status(200).send(teamInfo);
}

// Ideally this is hit once a season to get the teams
// app.get('/api/fetch_teams', fetchTeams) 
async function fetchTeams(req, res){

    const teams = await Team.find();
    teams.forEach(async (t) => {
        await Team.findByIdAndDelete(t.id);
    });

    client.get(`https://api.sportsdata.io/v3/nfl/scores/json/Teams`, {headers: {"Ocp-Apim-Subscription-Key": process.env['NFL_API_TOKEN']}}, function (data, response) {
        // parsed response body as js object
        data.forEach(team => {
            let payload = {
                name: team.FullName,
                team_id: team.TeamID,
                key: team.Key,
                conference: team.Conference,
                division: team.Division,
                stadium_id: team.StadiumID
            };
            Team.create(payload);
        });
    });
    
    return res.status(201).send({message: "Imported All Teams!"});
}

exports.getTeams = getTeams;
exports.getTeamById = getTeamById;
exports.fetchTeams = fetchTeams;
exports.client = client;