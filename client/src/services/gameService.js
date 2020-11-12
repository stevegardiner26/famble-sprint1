import axios from 'axios';
// eslint-disable-next-line
export default {
  getAllGames: async () => {
    const res = await axios.get('/api/games');
    return res.data || [];
  },
 
};
