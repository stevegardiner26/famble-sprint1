const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  // Get  
  app.get(`/api/users/:id`, async (req, res) => {
    const {id} = req.params;
    let user = await User.findById(id);
    return res.status(200).send(user);
  });

  // Create
  app.post(`/api/users`, async (req, res) => {
    // TODO: Potentially need to check if a user exists first before creating a new one (Use of google id here) (Still return the id)
    let user = await User.create(req.body);
    return res.status(201).send({
      error: false,
      user
    })
  })
}