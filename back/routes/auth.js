const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err){
            return next(err);
        }
        if(!user) {
            return res.status(401).json({ message: 'Authentication failed'})
        }
        req.login(user, { session: false }, (err) => {
            if(err){
                return next(err);
            }
            const token = jwt.sign({ userId: user._id },'123456');
            return res.json({ token });
        });

    })(req, res, next);
});

module.exports = router;