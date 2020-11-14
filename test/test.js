const chai = require('chai');
const nock = require('nock');
const expect = chai.expect;
const response = require('./response');
const getAllBets = require('../client/src/services/betService').getAll;

describe('Bet Services', function() {
    beforeEach(() => {
      nock('localhost:5000')
        .get('/api/bets')
        .reply(response);
    })
});

it('Get all bets', function() {
  return getAllBets()
    .then(response => {
      // Test result of 
      expect(response._id).to.equal('5faf2ad7997c503640478eb1');
      expect(response.user_id).to.equal('5fac5f347d42705f0c14fbb0');
      expect(response.team_id).to.equal('200');
    });
});