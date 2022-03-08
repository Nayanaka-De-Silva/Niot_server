const express = require('express');
const router = express.Router();
const mqtt_client = require('../mqtt/mqtt');

router.get('/enabled/:id', (req, res) => {
	// Turn off lights
	let id = req.params.id;
	mqtt_client.publish("leds/options/enabled", "off");
	res.status(200).json(id);
})

module.exports = router;
