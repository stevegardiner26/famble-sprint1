/* eslint-disable camelcase */
import axios from 'axios';
// eslint-disable-next-line
export default {
  getAll: async () => {
    const res = await axios.get('/api/bets');
    return res.data || [];
  },

  getBetsByGameId: async (game_id) => {
    const res = await axios.get('/api/bets/games/'+ game_id);
    return res.data || [];
  },
  
  getBetsByUserId: async (user_id) => {
    const res = await axios.get('/api/bets/users/'+ user_id);
    return res.data || [];
  },

  createBet: async (user_id, game_id, team_id, amount) => {
    const res = await axios.post('/api/bets', {
      user_id,
      game_id,
      team_id,
      amount,
    });
    return res.data || [];
  },

  updateBet: async (id, user_id, updatedAmount) => {
    const res = await axios.put('/api/bets/'+ id, {
        user_id,
        updatedAmount,
    });
    return res.data || [];
  },
};
