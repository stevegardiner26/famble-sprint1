const { 
  getUserById,
  createUser
} = require('./userRoutesHandlers');

module.exports = (app) => {
  // Get  
  app.get(`/api/users/:id`, getUserById);

  // Create
  app.post(`/api/users`, createUser); 
}