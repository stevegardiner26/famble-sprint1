const Client = require('node-rest-client').Client;
const mongoose = require('mongoose');
const client = new Client();

async function getStatsByTeamID(req, res) {
    return res.status(200).send({
        wins: 8,
        losses: 8,
        touchdowns: 2,
        passing_attempts: 100,
        completion_percentage: 100,
        passing_yards: 100,
        fumbles_forced: 100,
        rushing_yards: 100,
        penalty_yards: 100,
        sacks: 100,
    })
}

exports.client = client;
exports.getStatsByTeamID = getStatsByTeamID;