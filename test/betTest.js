const httpMocks = require('node-mocks-http');
const sinon = require('sinon');
const assert = require('chai').assert;
const { betModel } = require('../models/Bet');
const { userModel } = require('../models/User');
const { gameModel } = require('../models/Game');
const { teamModel } = require('../models/Team');
const { getBets, getBetsByGameID, postBets } = require('../routes/betRoutesHandlers');

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

  it("it should have status code 200 and pass data from Bet.find", function(done) {
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

// describe("POST /api/bets/:gameid", function() {  
//   let stub;
//   let fixture;
//   beforeEach((done) =>{
//     fixture = {
//       _id : "fakeuser",
//       name: "Fake",
//       surname: "User"
//     }

//     stub = sinon.stub(betModel, "find").returns(fixture);
//     done();
//   })

//   afterEach((done) => {
//     stub.restore();
//     done();
//   })

//   it("it should have status code 200 and pass data from Bet.find", function(done) {
//     const mockRequest = httpMocks.createRequest({
//       method: "GET",
//       url: "/api/bets"
//     });
//     const mockResponse = httpMocks.createResponse({
//       eventEmitter: require('events').EventEmitter
//     });
    
//     mockResponse.on('end', function() {
//       try {
//         assert.strictEqual(mockResponse.statusCode, 200);
//         assert.strictEqual(mockResponse._getData(), fixture);
//         done();
//       }
//       catch (error){
//         done(error);
//       }
//     });

//     getBets(mockRequest, mockResponse);
//   });
// });