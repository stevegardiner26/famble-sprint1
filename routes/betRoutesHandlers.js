const mongoose = require('mongoose');
const User = mongoose.model('users');
const Bet = mongoose.model('bets');
const Game = mongoose.model('games');

// app.get('/api/bets', getBets);
async function getBets(req, res){
    const bets = await Bet.find();
    return res.status(200).send(bets);
}

// app.get('/api/bets/users/:user_id', getBetsByUserID) 
async function getBetsByUserID(req, res){
    const { user_id } = req.params;
    const bets = await Bet.find({user_id: user_id});
    return res.status(200).send({
      error: false,
      bets,
    });
}

// app.get('/api/bets/:game_id', getBetsByGameID);
async function getBetsByGameID(req, res){
    const { game_id } = req.params;
    const bets = await Bet.find({game_id: game_id});
    return res.status(202).send({
        error: false,
        bets,
    });
}

// app.post('/api/bets', postBets);
async function postBets(req, res){
    const bet = await Bet.create(req.body);
    const user = await User.findById(req.body.user_id);
    await User.findByIdAndUpdate(req.body.user_id, {
        shreddit_balance: user.shreddit_balance - req.body.amount
    });
    return res.status(201).send({
      error: false,
      bet,
    });
}

// app.put('/api/bets/:id', putBets);
async function putBets(req, res) {
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
}

// app.delete('/api/bets/:id', deleteBets);
async function deleteBets(req, res){
    const { id } = req.params;
    const bet = await Bet.findByIdAndDelete(id);
    return res.status(202).send({
        error: false,
        bet,
    });
}
  
exports.getBets = getBets;
exports.getBetsByGameID = getBetsByGameID;
exports.postBets = postBets;
exports.putBets = putBets;
exports.deleteBets = deleteBets;
exports.getBetsByUserID = getBetsByUserID;