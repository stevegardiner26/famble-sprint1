import axios from 'axios';
// eslint-disable-next-line
export default {
  getAll: async () => {
    const res = await axios.get('/api/bets');
    return res.data || [];
  },

  // TODO: Create a Get by Game ID 

  createBet: async (user_id, game_id, team_id, amount) => {
    const res = await axios.post('/api/bets', {
        user_id,
        game_id,
        team_id,
        amount
    });
    return res.data || [];
  },
//   updateBet: async (id, user_id, game_id, team_id, amount) => {
//     const res = await axios.put('/api/bets/'+ id, {
//         user_id,
//         game_id,
//         team_id,
//         amount,
//     });
//     return res.data || [];
//   },
//   deleteBet: async (id) => {
//     const res = await axios.delete('/api/bets/'+ id);
//     return res.data || [];
//   },
};
