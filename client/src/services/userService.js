/* eslint-disable no-undef */
import axios from 'axios';
// eslint-disable-next-line
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
