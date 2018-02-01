//e6 syntax 

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Startegy;

const app = express();

// Index Rote
app.get('/', (req, res) => {
	const title = 'Welcome';
	res.render('index', {
		title: title
	});
});

//passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);