const httpMocks = require('node-mocks-http');
const sinon = require('sinon');
const assert = require('chai').assert;
const { teamModel } = require('../models/Team');
const { getTeams, getTeamById, fetchTeams, client } = require('../routes/teamRoutesHandlers');

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

describe("GET /api/teams/:id", function() {  
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

    mockFind = sinon.stub(teamModel, "find").callsFake((query) => {
      return ({
        name: "Arizona Cardinals",
        team_id: query.team_id,
        key: "ARI",
        conference: "NFC",
        division: "West",
        stadium_id: 29
      });
    })

    done();
  })

  afterEach((done) => {
    mockFind.restore();
    done();
  })

  it("it should have status code 200 and pass data from url into team.find", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/api/teams/1",
      params: {
        id: 1
      }
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

    getTeamById(mockRequest, mockResponse);
  });
});

describe("GET /api/fetch_teams", function() {  
  let mockFind;
  let mockFindByIdAndDelete;
  let mockClientGet;
  let mockCreate; 
  const fakeTeam = [{
    id: "5fb83990417ae836a4e2b171",
    name: "Arizona Cardinals",
    team_id: 1,
    key: "ARI",
    conference: "NFC",
    division: "West",
    stadium_id: 29
  }]

  beforeEach((done) =>{
    mockFind = sinon.stub(teamModel, "find").returns(fakeTeam);
    mockFindByIdAndDelete = sinon.stub(teamModel, "findByIdAndDelete").returns(fakeTeam)
    mockClientGet = sinon.stub(client, "get").returns(fakeTeam)
    mockClientGet = sinon.stub(teamModel, "create").returns(fakeTeam)
    done();
  })

  afterEach((done) => {
    mockFind.restore();
    done();
  })

  it("it should have status code 201 and return success message", function(done) {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/api/fetch_teams"
    });
    const mockResponse = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    
    mockResponse.on('end', function() {
      const expected = {message: "Imported All Teams!"};
      try {
        assert.strictEqual(mockResponse.statusCode, 201);
        assert.deepStrictEqual(mockResponse._getData(), expected);
        done();
      }
      catch (error){
        done(error);
      }
    });

    fetchTeams(mockRequest, mockResponse);
  });
});