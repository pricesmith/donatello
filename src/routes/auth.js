const router = require('express').Router();
const passport = require('passport');

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
    scope: ['profile']
}));

/// google auth callback redirect
router.get('/google/redirect', (req, res) => {
    res.send('Youve reached the callback URI');
})

export default router;