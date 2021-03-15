const express = require('express');
const port = process.env.PORT || 3000;
const app = express();  // Create Express App

app.get('/', (req, res) => {
    res.send(`Hello world!`);
})

app.get('/test', (req, res) => {
    res.send(`Test`);
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});