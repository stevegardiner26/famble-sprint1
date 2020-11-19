const mongoose = require('mongoose');
const User = mongoose.model('users')
const Bet = mongoose.model('bets');
const Game = mongoose.model('games');

module.exports = (app) => {
  // Get every single bet
  app.get('/api/bets', async (req, res) => {
    const bets = await Bet.find();
    return res.status(200).send(bets);
  });

  // Bad practice, because it is biased towards User or the Game.

  app.get('/api/bets/games/:game_id', async (req, res) => {
    const { game_id } = req.params;

    const bets = await Bet.find({game_id: game_id});

    return res.status(202).send({
      error: false,
      bets,
    });
  });

  // Get every bet under User ID
  app.get('/api/bets/users/:user_id', async (req, res) => {
    const { user_id } = req.params;

    const bets = await Bet.find({user_id: user_id});

    return res.status(200).send({
      error: false,
      bets,
    });
  });

  // Get a single Bet by ID

  // app.get('/api/bets/:id', async (req, res) => {
  //   const bet = await Bet.findById(req.params.id);
  //   return res.status(200).send({
  //     error: false,
  //     bet,
  //   });
  // });

  // Create
  app.post('/api/bets', async (req, res) => {
    const bet = await Bet.create(req.body);
    const user = await User.findById(req.body.user_id);
    await User.findByIdAndUpdate(req.body.user_id, {
        shreddit_balance: user.shreddit_balance - req.body.amount
    });
    return res.status(201).send({
      error: false,
      bet,
    });
  });

  // Update Amount
  app.put('/api/bets/:id', async (req, res) => {
    let bet = await Bet.findById(req.params.id);
    const user = await User.findById(req.body.user_id);
    if(req.body.updatedAmount > bet.amount){
      await Bet.findByIdAndUpdate(req.params.id,{
        amount: req.body.updatedAmount
      });
      await User.findByIdAndUpdate(req.body.user_id, {
        shreddit_balance: user.shreddit_balance - (req.body.updatedAmount - bet.amount)
      });
      updatedBet = await Bet.findById(req.params.id);
      return res.status(202).send({
        error: false,
        updatedBet,
      });
    }else{
      return res.status(202).send({
        error: true,
        msg: "Could not update because the updated amount is the less than or equal to the current amount",
      });
    }
  });

//   // Delete
//   app.delete('/api/bets/:id', async (req, res) => {
//     const { id } = req.params;

//     const bet = await Bet.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       bet,   5fac63bb93e6e411b0a84dd5 id
//     }); 5fac5f347d42705f0c14fbb0 user id
//   });
};