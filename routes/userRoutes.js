const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
  // Get
  app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).send(user);
  });

  // Create
  app.post('/api/users', async (req, res) => {
    let user = await User.findOne({ google_id: req.body.google_id });
    if (!user) {
      user = await User.create(req.body);
    }
    return res.status(201).send({
      error: false,
      user,
    });
  });
};
