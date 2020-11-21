const httpMocks = require('node-mocks-http');
const sinon = require('sinon');
const assert = require('chai').assert;
const { betModel } = require('../models/Bet');
const { userModel } = require('../models/User');
const { gameModel } = require('../models/Game');
const { teamModel } = require('../models/Team');
const { getBets, getBetsByGameID, postBets, getBetsByUserID, putBets, deleteBets } = require('../routes/betRoutesHandlers');

describe("GET /api/bets", function() {  
  let stub;
  let fixture;
  beforeEach((done) =>{
    fixture = {
      _id : "fakeuser",
      name: "Fake",
      surname: "User"
    }

    stub = sinon.stub(betModel, "find").returns(fixture);
    done();
  })

  afterEach((done) => {
    stub.restore();
    done();
  })

  it("it should have status code 200 and pass data from Bet.find", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/api/bets"
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      try {
        assert.strictEqual(mockResponse.statusCode, 200);
        assert.strictEqual(mockResponse._getData(), fixture);
        done();
      }
      catch (error){
        done(error);
      }
    });

    getBets(mockRequest, mockResponse);
  });
});

// ----------------------------------------------------------------------------------
describe("GET /api/bets/:gameid", function() {  
  let stub;
  let fixture;
  beforeEach((done) =>{
    stub = sinon.stub(betModel, "find").callsFake((query) => { 
      return ({
        _id : "fakeuser",
        name: "Fake",
        surname: "User",
        game_id: query.game_id
      });
    });

    fixture = {
      _id : "fakeuser",
      name: "Fake",
      surname: "User",
      game_id: 4
    }

    done();
  })

  afterEach((done) => {
    stub.restore();
    done();
  })

  it("it should have status code 202 and pass gameId from Bet.find", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/api/bets/4",
      params: {
        game_id: 4
      }
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = {
        error: false,
        bets: fixture
      }
      try {
        assert.strictEqual(mockResponse.statusCode, 202);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    });

    getBetsByGameID(mockRequest, mockResponse);
  });
});

// ---------------------------------------------------------------------
describe("POST /api/bets", function() {  
  let mockCreate;
  let mockFindById;
  let mockFindByIdUpdate;
  let userResult;

  beforeEach((done) =>{
    userResult = {
      shreddit_balance: 10000,
      name: "Jay Rana",
      profile_image: "https://lh3.googleusercontent.com/a-/AOh14Gg629IeUkf1lWpBcSqr7-m_pEhpvQI3CdAczWijeA=s96-c",
      email: "jpr48@njit.edu",
      google_id: "108376284041323611441"
    }

    mockCreate = sinon.stub(betModel, "create").callsFake((body) => {
      return body;
    })
    
    mockFindById = sinon.stub(userModel, "findById").returns(userResult);
    mockFindByIdUpdate = sinon.stub(userModel, "findByIdAndUpdate").returns();
    done();
  })

  afterEach((done) => {
    mockCreate.restore();
    mockFindById.restore();
    mockFindByIdUpdate.restore();
    done();
  })

  it("it should have status code 201 and pass data from body into bet.create", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "POST",
      url: "/api/bets",
      body: {
        user_id: "5fb83983417ae836a4e2b170",
        game_id: "17403",
        team_id: "5",
        amount: 1100,
      }
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = {
        error: false,
        bet: {
          user_id: "5fb83983417ae836a4e2b170",
          game_id: "17403",
          team_id: "5",
          amount: 1100,
        }
      }
      try {
        assert.strictEqual(mockResponse.statusCode, 201);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    });

    postBets(mockRequest, mockResponse);
  });
});