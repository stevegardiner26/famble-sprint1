import axios from 'axios';
// eslint-disable-next-line
export default {
  getAllGames: async () => {
    const res = await axios.get('/api/fetch_games');
    return res.data || [];
  },
  getAllTeams: async () => {
    const res = await axios.get('/api/fetch_teams');
    return res.data || [];
  },
  getAll: async () => {
    const res = await axios.get('/api/fetch_weekly_scores');
    return res.data || [];
  },
};
