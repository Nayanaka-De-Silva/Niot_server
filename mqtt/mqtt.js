require('dotenv').config();
const mqtt = require('mqtt');
const mqtt_server = process.env.MQTT_SERVER;
const mqtt_port   = process.env.MQTT_PORT;
const client = mqtt.connect(`${mqtt_server}:${mqtt_port}`);

client.on('connect', () => {
    console.log(`Connected to: ${mqtt_server}\nOn Port: ${mqtt_port}`);
})

module.exports = client;