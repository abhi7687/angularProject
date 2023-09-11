const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));

mongoose.connect('mongodb://127.0.0.1:27017/appSheet_p', {useNewUrlParser: true, useUnifiedTopology: true});

passport.use(
    new LocalStrategy((username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if(err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if(!user.validPassword(password)){
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user);
        });
    })
);

app.use(passport.initialize());

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});