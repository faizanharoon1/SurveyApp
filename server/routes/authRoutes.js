
const passport = require('passport');

module.exports = app =>{

    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email'] // access we need to user info
    })
    );
    
    app.get('/auth/google/callback',passport.authenticate('google'))

    
};

