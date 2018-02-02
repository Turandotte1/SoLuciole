//j'utiliserai e6 syntax avec arrow functions :) 

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

// Index Route
app.get('/', (req, res) => {
	res.send('hi');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);