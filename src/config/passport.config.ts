// can also put this in like a services folder, etc
import passport = require('passport');
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from 'passport-google-oauth20';

passport.use(
    new GoogleStrategy({
        callbackURL:    '/auth/google/redirect',
        clientID:       process.env.GOOGLE_ID,
        clientSecret:   process.env.GOOGLE_SECRET,
    },
    async (
        accessToken: string, 
        refreshToken: string, 
        profile: Profile, 
        done: VerifyCallback) => {
        // passport callback function
        console.log('passport callback function fired');
        console.log(profile);
    })
);

// server to server interaction? 