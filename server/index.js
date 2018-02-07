const express= require('express');
const mongoose = require('mongoose');
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const models=require('./models/User');
const passportConfig = require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json()); // middle ware dealing with POST requests.

app.use( 
    cookieSession({
        maxAge: (30 *24*60*24*1000), // 30 days of cookie age.
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session()); // passport will know to use cookie for Auth.

require('./routes/authRoutes')(app); // refactored way of calling requiring function in JS
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){ // heroku env variable NODE_ENV

// EXPRESS WILL server up production assetrs 
// like our main.js file or main.css file

app.use(express.static('client/build'));


// Express will server index .html file
// if it doesnt find the route
const path = require('path');
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})
}

const PORT= process.env.PORT || 5000; // heroku dynamic port binding.
app.listen(PORT);