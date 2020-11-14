var expect = require('chai').expect
mongoose = require('mongoose');

describe('User Models', function() {
  var User;

  beforeEach(function(done) {
    mongoose.connect('mongodb://localhost/test_famble_db');
    mongoose.connection.once('connected', () => {
      mongoose.connection.db.dropDatabase();

      require('../models/User').registerUserModel();
      // This is the right model because ^registerModels set it up for us.
      User = mongoose.model('users');
      done();
    });
  });

  afterEach(function(done) {
    mongoose.disconnect();
    done();
  });

  describe('Lifecycle', function() {
    it('should save with email', function(done) {
      var user = new User({
        email: "alex1@alex.com",
      });
      user.save(function(err) {
        expect(err).to.not.exist
        done();
      });
    });
  });
});

describe('Bet Models', function() {
    var Bet;
  
    beforeEach(function(done) {
      mongoose.connect('mongodb://localhost/test_famble_db');
      mongoose.connection.once('connected', () => {
        mongoose.connection.db.dropDatabase();
  
        require('../models/Bet').registerBetModel();
        // This is the right model because ^registerModels set it up for us.
        Bet = mongoose.model('bets');
        done();
      });
    });
  
    afterEach(function(done) {
      mongoose.disconnect();
      done();
    });
  
    describe('Lifecycle', function() {
      it('should save with all data', function(done) {
        var bet = new Bet({
            user_id: 2,
            game_id: "testID",
            team_id: 2,
            amount: 1000,
        });
        bet.save(function(err) {
          expect(err).to.not.exist
          done();
        });
      });
    });
  });