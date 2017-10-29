const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

require("./routes/authRoutes");(app);

if(process.env.NODE_ENV === 'production'){
    // Express can be use to serve up assets
    app.use(express.static);
}

const port = process.env.PORT || 5000;
app.listen(port);