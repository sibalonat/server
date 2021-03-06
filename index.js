const express = require('express');

const mongoose = require('mongoose');
// const { authenticate } = require('passport');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
require('./models/User');
const passport = require('passport');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// app.get(
//     '/auth/google', 
//     passport.authenticate('google', {
//     scope: ['profile', 'email']
// }));

// app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;

app.listen(PORT);