const router = require('express').Router();
import passport = require('passport');

/// auth login
router.get('/login', (req, res) => {
    res.render('login');
})

/// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send("Logging out.")
})

/// auth sign-up

/// google auth
router.get('/google', passport.authenticate('google', {
    // scope: ['email', 'profile', 'https://www.googleapis.com/auth/youtube.readonly']
    scope: ['profile']
}));

/// google auth callback redirect
/// this passport middleware will take the code that we got from the initial request to google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send(`You've reached the callback URI`);
})

export default router;