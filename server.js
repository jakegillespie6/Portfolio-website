const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//call authorization route on express app
require('./routes/auth')(app);


app.listen(process.env.PORT || 5000, function() {
    console.log("App listening on ", this.address().port, app.settings.env)
});

