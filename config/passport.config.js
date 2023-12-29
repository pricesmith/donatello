// can also put this in like a services folder, etc

const passport = require('passport');
const  GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/auth/google/redirect',
    },
    () => {
        // passport callback function
        
    }
);
