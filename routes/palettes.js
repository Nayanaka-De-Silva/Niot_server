const express = require('express');
const router = express.Router();
const mqtt_client = require('../mqtt/mqtt');

router.get('/', (req, res) => {
    // Serve List of available Palettes
    res.status(404).json('Coming soon');
});

router.get('/:palette', (req, res) => {
    // Change Palette
    let palette = req.params.palette;
    mqtt_client.publish("leds/palette", palette);
    res.status(200).json(palette);
});

module.exports = router;