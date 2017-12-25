const express= require('express');
const mongoose = require('mongoose');
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require('./config/keys');
const models=require('./models/User');
const passportConfig = require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use( 
    cookieSession({
        maxAge: (30 *24*60*24*1000), // 30 days of cookie age.
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session()); // passport will know to use cookie for Auth.

require('./routes/authRoutes')(app); // refactored way of calling requiring function in JS

const PORT= process.env.PORT || 5000; // heroku dynamic port binding.
app.listen(PORT);