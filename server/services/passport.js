const passport = require('passport');
const GoogleStrategy= require ('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use( new GoogleStrategy({
    clientID:keys.googleClientID,//clientid:      
    clientSecret:keys.googleClientSecret,// secret: 
    callbackURL:'/auth/google/callback'
},(accessToken,refreshToken,profile,done)=>{

// give access us to read profile. expires after sometime.
// refreshToken can get another access token if old one expires.

})); // creates a new instance of new passport strategy. it will take parameters of {options, callback func}.


