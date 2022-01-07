require('dotenv').config();
const express = require("express");
const port = process.env.PORT || 3000;
const palette = require('./routes/palettes');

const app = express();

app.use(palette);

app.listen(port, () => {
    console.log(`NioT Server is now running on port ${port}`);
});