const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({path: __dirname + '/.env'})

// IMPORT MODELS
require('./models/Game');
require('./models/User');
require('./models/Bet');
require('./models/Team');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`, {useNewUrlParser: true, useUnifiedTopology: true}, function () {
    console.log("Connected to MongoDB");
});

app.use(bodyParser.json());

// IMPORT ROUTES
require('./routes/gameRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/teamRoutes')(app);
require('./routes/betRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

module.exports = app;
