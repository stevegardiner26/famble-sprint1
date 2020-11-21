const httpMocks = require('node-mocks-http');
const sinon = require('sinon');
const assert = require('chai').assert;
const { gameModel } = require('../models/Game');
const { 
  getGames,
  getGameById,
  fetchWeeklyScores,
  fetchGames,
  updateGameById,
  deleteGameById,
  client  
} = require('../routes/gameRoutesHandlers');

describe("GET /api/teams", function() {  
  let mockFind;
  const fakeTeam = {
    name: "Arizona Cardinals",
    team_id: 1,
    key: "ARI",
    conference: "NFC",
    division: "West",
    stadium_id: 29
  }

  beforeEach((done) =>{
    mockFind = sinon.stub(teamModel, "find").returns(fakeTeam)
    done();
  })

  afterEach((done) => {
    mockFind.restore();
    done();
  })

  it("it should have status code 200 and return result of Team.find", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/api/teams",
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = fakeTeam;
      try {
        assert.strictEqual(mockResponse.statusCode, 200);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    });

    getTeams(mockRequest, mockResponse);
  });
});

