const router = require('express').Router();

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

/// auth google callback
router.get('/google', 
})

export default router;