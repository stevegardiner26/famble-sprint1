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

describe('Team Models', function() {
  var Team;
  
  beforeEach(function(done) {
    mongoose.connect('mongodb://localhost/test_famble_db');
    mongoose.connection.once('connected', () => {
      mongoose.connection.db.dropDatabase();
  
      require('../models/Team').registerTeamModel();
      // This is the right model because ^registerModels set it up for us.
      Team = mongoose.model('teams');
      done();
    });
  });
  
  afterEach(function(done) {
    mongoose.disconnect();
    done();
  });
  
  describe('Lifecycle', function() {
    it('should save data', function(done) {
      var team = new Team({
          team_id: 1,
          name: "Giants",
          key: "testKey",
          division: "NFC East",
          stadium_id: 1
      });
      team.save(function(err) {
        expect(err).to.not.exist
        done();
      });
    });
  });
});

describe('Game Models', function() {
  var Game;
  
  beforeEach(function(done) {
    mongoose.connect('mongodb://localhost/test_famble_db');
    mongoose.connection.once('connected', () => {
      mongoose.connection.db.dropDatabase();
  
      require('../models/Game').registerGameModel();
      // This is the right model because ^registerModels set it up for us.
      Game = mongoose.model('games');
      done();
    });
  });
  
  afterEach(function(done) {
    mongoose.disconnect();
    done();
  });
  
  describe('Lifecycle', function() {
    it('should save data', function(done) {
      var game = new Game({
          game_id: 1,
          sport_type: "NFL",
          start_time: 1234567890,
          winner: "Giants",
          home_team_id: 123,
          away_team_id: 321,
          canceled: false,
          status: "test",
          away_score: 12,
          home_score: 10,
          in_progress: true,
          end_time: 1234567890,
      });
      game.save(function(err) {
        expect(err).to.not.exist
        done();
      });
    });
  });
});
