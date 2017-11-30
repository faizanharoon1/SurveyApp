const express= require('express');
const passportConfig = require('./services/passport');



const app = express();

require('./routes/authRoutes')(app); // refactored way of calling requiring function in JS

const PORT= process.env.PORT || 5000; // heroku dynamic port binding.
app.listen(PORT);