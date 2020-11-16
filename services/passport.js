
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('user');
const passport = require('passport');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // done(null, user.id);
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ goodleId: profile.id })
            if (existingUser) {
                return done(null, existingUser);
            } 
        const user = await new User({ googleId: profile.id }).save()
        done(null, user);                  
    }));