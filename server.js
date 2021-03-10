const express = require('express');
const port = process.env.PORT || 3000;
const app = express();  // Create Express App

app.get('/', (req, res) => {
    res.send(`Hello world!`);
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});