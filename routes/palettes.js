const express = require('express');
const router = express.Router();
const mqtt_client = require('../mqtt/mqtt');

router.get('/', (req, res) => {
    // Serve homepage
});

router.get('/leds/palette/', (req, res) => {
    // Serve Palette page

});

router.get('/leds/palette/:palette', (req, res) => {
    // Change Palette
    let palette = req.params.palette;
    mqtt_client.publish("leds/palette", palette);
    res.status(200).send(`Success sending message: ${palette} to topic: leds/palette`);
});

module.exports = router;