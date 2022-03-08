const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Serve Card Info to Front End

		// Using Test Data. Change this to retrieve the data from the DB
    const cardInfoTestData = [
			{
				"title": "LED", 							
				"content": "Current Palette: Coder Lights", 
				"active": 0,
				"listInfo": [
					{"title": "Coder Lights", "url": "/leds/palette/0"},
					{"title": "Wave Lights", "url": "/leds/palette/1"},
					{"title": "Pulse Lights", "url": "/leds/palette/2"},
					{"title": "Morning Lights", "url": "/leds/palette/3"},
					{"title": "Creepy Lights", "url": "/leds/palette/4"},
					{"title": "Glitch Lights", "url": "/leds/palette/5"},
					{"title": "Strobe Lights", "url": "/leds/palette/6"},
					{"title": "Lights Out", "url": "/leds/options/enabled/7"}
				]
			},
			{
				"title": "Weather Station", 	
				"content": "Temperature: 32|Humidity: 43",
				"listInfo": [
					{"title": "Refresh Data", "url": "/ws/refresh"}
				]
			}
		];

		res.status(200).json(cardInfoTestData);
});

module.exports = router;