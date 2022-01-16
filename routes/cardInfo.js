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
					{"title": "Pulse Lights", "url": "/leds/palette/1"},
					{"title": "Morning Lights", "url": "/leds/palette/2"},
					{"title": "Creepy Lights", "url": "/leds/palette/3"}
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