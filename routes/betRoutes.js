const mongoose = require('mongoose');
const User = mongoose.model('users')
const Bet = mongoose.model('bets');

module.exports = (app) => {
     // Get
  app.get('/api/bets', async (req, res) => {
    const bets = await Bet.find();
    return res.status(200).send(bets);
  });

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

//   // Update
//   app.put('/api/bets/:id', async (req, res) => {
//     const { id } = req.params;
//     const bet = await Bet.findByIdAndUpdate(id, req.body);
//     return res.status(202).send({
//       error: false,
//       bet,
//     });
//   });

//   // Delete
//   app.delete('/api/bets/:id', async (req, res) => {
//     const { id } = req.params;

//     const bet = await Bet.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       bet,
//     });
//   });
};