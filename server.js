require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 4000;

// Routes
const palette = require('./routes/palettes');
const cardInfo = require('./routes/cardInfo');
const options = require('./routes/options');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use("/cardInfo", cardInfo);
app.use("/leds/palette", palette);
app.use("/leds/options", options);

// Not Found Handler
app.use((req, res, next) => {
    res.status(404).type('text').send('Not Found')
})

app.listen(port, () => {
    console.log(`NioT Server is now running on port ${port}`);
});