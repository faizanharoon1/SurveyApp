const passport = require('passport');
const GoogleStrategy= require ('passport-google-oauth20').Strategy;
const mongoose= require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{

    //  this function serialze the user info and saves it to the cookie on client side.
done(null,user.id);

});

passport.deserializeUser((id,done)=>{
    
        //  this function deserialze the user info 
        User.findById(id) // all transactions to mongodb are async, so we will use promises callback.
            .then((user)=>{
                done(null,user); // we got the user from the cookies
        
        });
        
    });

passport.use( new GoogleStrategy({
        clientID:keys.googleClientID,//clientid:      
        clientSecret:keys.googleClientSecret,// secret: 
        callbackURL:'/auth/google/callback',
        proxy: true


},(accessToken,refreshToken,profile,done)=>{

// give access us to read profile. expires after sometime.
// refreshToken can get another access token if old one expires.
    User.findOne({googleId:profile.id}) // all transactions to mongodb are async, so we will use promises callback.
        .then((existingUser)=>{

             if(existingUser){
                // user already exist lets go to profile.. 
                done(null,existingUser); // error, finished object , we are done with passport.
            }else
                new User({ googleId:profile.id}).save() // save to database in MongoDB
                .then((user)=>  done(null,existingUser)); // callback to done with passport.
    })

})); // creates a new instance of new passport strategy. it will take parameters of {options, callback func}.


