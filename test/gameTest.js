const httpMocks = require('node-mocks-http');
const sinon = require('sinon');
const assert = require('chai').assert;
const { betModel } = require('../models/Bet');
const { userModel } = require('../models/User');
const { gameModel } = require('../models/Game');
const { teamModel } = require('../models/Team');
const { 
  getGames,
  getGameById,
  fetchWeeklyScores,
  fetchGames,
  updateGameById,
  deleteGameById,
  client,
  date_cache  
} = require('../routes/gameRoutesHandlers');

describe("GET /api/games", function() {  
  let mockFind;
  const fakeGame = {
    game_id: 17263,
    sport_type: "NFL",
    away_team_id: 13,
    home_team_id: 16,
    canceled: false,
    status: "Final"
  }

  beforeEach((done) =>{
    mockFind = sinon.stub(gameModel, "find").returns(fakeGame)
    done();
  })

  afterEach((done) => {
    mockFind.restore();
    done();
  })

  it("it should have status code 200 and return result of Game.find", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/api/games"
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = fakeGame;
      try {
        assert.strictEqual(mockResponse.statusCode, 200);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    });

    getGames(mockRequest, mockResponse);
  });
});

describe("GET /api/games/:id", function() {  
  let mockFind;
  const fakeGame = {
    game_id: 17263,
    sport_type: "NFL",
    away_team_id: 13,
    home_team_id: 16,
    canceled: false,
    status: "Final"
  }

  beforeEach((done) =>{
    mockFind = sinon.stub(gameModel, "findOne").callsFake((query) => {
      return ({
      game_id: query.game_id,
      sport_type: "NFL",
      away_team_id: 13,
      home_team_id: 16,
      canceled: false,
      status: "Final"
      })
    })
    done();
  })

  afterEach((done) => {
    mockFind.restore();
    done();
  })

  it("it should have status code 200 and return result of Game.findOne with gameId", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/api/games/17263",
      params:{
        id: 17263
      }
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = fakeGame;
      try {
        assert.strictEqual(mockResponse.statusCode, 200);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    });

    getGameById(mockRequest, mockResponse);
  });
});

// -------Ask Steve about Client.get separating into separate function for callbacks
// describe("GET /api/fetch_weekly_scores", function() {  
//   let mockFind;
//   const fakeGame = {
//     game_id: 17263,
//     sport_type: "NFL",
//     away_team_id: 13,
//     home_team_id: 16,
//     canceled: false,
//     status: "Final"
//   }

//   beforeEach((done) =>{
//     mockFind = sinon.stub(client, "get").returns(fakeGame)
//     done();
//   })

//   afterEach((done) => {
//     mockFind.restore();
//     done();
//   })

//   it("it should have status code 200 and return success message", function(done) {
//     const mockRequest = httpMocks.createRequest({
//       method: "GET",
//       url: "/api/fetch_weekly_scores"
//     });
//     const mockResponse = httpMocks.createResponse({
//       eventEmitter: require('events').EventEmitter
//     });
    
//     mockResponse.on('end', function() {
//       const expected = {message: "Updated This Weeks Games!"};
//       try {
//         assert.strictEqual(mockResponse.statusCode, 200);
//         assert.deepStrictEqual(mockResponse._getData(), expected);
//         done();
//       }
//       catch (error){
//         done(error);
//       }
//     });

//     fetchWeeklyScores(mockRequest, mockResponse);
//   });
// });

// fetchGames need to ask steven about separating that too
// describe("GET /api/games", function() {  
//   let mockFind;
//   const fakeGame = {
//     game_id: 17263,
//     sport_type: "NFL",
//     away_team_id: 13,
//     home_team_id: 16,
//     canceled: false,
//     status: "Final"
//   }

//   beforeEach((done) =>{
//     mockFind = sinon.stub(gameModel, "find").returns(fakeGame)
//     done();
//   })

//   afterEach((done) => {
//     mockFind.restore();
//     done();
//   })

//   it("it should have status code 200 and return result of Game.find", function(done) {
//     const mockRequest = httpMocks.createRequest({
//       method: "GET",
//       url: "/api/games"
//     });
//     const mockResponse = httpMocks.createResponse({
//       eventEmitter: require('events').EventEmitter
//     });
    
//     mockResponse.on('end', function() {
//       const expected = fakeGame;
//       try {
//         assert.strictEqual(mockResponse.statusCode, 200);
//         assert.deepStrictEqual(mockResponse._getData(), expected);
//         done();
//       }
//       catch (error){
//         done(error);
//       }
//     });

//     getGames(mockRequest, mockResponse);
//   });
// });

describe("PUT /api/games/:id", function() {  
  let mockFind;
  const fakeGame = {
    game_id: 17263,
    sport_type: "NFL",
    away_team_id: 13,
    home_team_id: 16,
    canceled: false,
    status: "Final"
  }

  beforeEach((done) =>{
    mockFind = sinon.stub(gameModel, "findByIdAndUpdate").callsFake((id, body) => {
      return ({
        game_id: id,
        ...body
      })
    })
    done();
  })

  afterEach((done) => {
    mockFind.restore();
    done();
  })

  it("it should have status code 202 and return result of Game.findByIdAndUpdate", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "PUT",
      url: "/api/games/:id",
      params: {
        id: 17263
      },
      body: {
        sport_type: "NFL",
        away_team_id: 13,
        home_team_id: 16,
        canceled: false,
        status: "Final"
      }
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = {
        error: false,
        game: fakeGame
      };
      try {
        assert.strictEqual(mockResponse.statusCode, 202);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    });

    updateGameById(mockRequest, mockResponse);
  });
});

describe("DELETE /api/games/:id", function() {  
  let mockFind;
  const fakeGame = {
    game_id: 17263,
    sport_type: "NFL",
    away_team_id: 13,
    home_team_id: 16,
    canceled: false,
    status: "Final"
  }

  beforeEach((done) =>{
    mockFind = sinon.stub(gameModel, "findByIdAndDelete").callsFake((id) => {
      return ({
        game_id: id,
        sport_type: "NFL",
        away_team_id: 13,
        home_team_id: 16,
        canceled: false,
        status: "Final"
      })
    })
    done();
  })

  afterEach((done) => {
    mockFind.restore();
    done();
  })

  it("it should have status code 202 and return result of Game.findByIdAndDelete", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "PUT",
      url: "/api/games/:id",
      params: {
        id: 17263
      },
      body: {
        sport_type: "NFL",
        away_team_id: 13,
        home_team_id: 16,
        canceled: false,
        status: "Final"
      }
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = {
        error: false,
        game: fakeGame
      };
      try {
        assert.strictEqual(mockResponse.statusCode, 202);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    }); 

    deleteGameById(mockRequest, mockResponse);
  });
});