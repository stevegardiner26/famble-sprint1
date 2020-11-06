import axios from 'axios';

export default {
  getCurrentUser: async () => {
    const res = await axios.get(`/api/users/${localStorage.user_id}`);
    return res.data || [];
  },
  signIn: async (payload) => {
    const res = await axios.post('/api/users', payload);
    return res.data || [];
  },
};
