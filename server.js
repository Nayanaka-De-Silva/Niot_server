require('dotenv').config();
const express = require("express");
const { createServer } = require("http");
const port = process.env.PORT || 3000;
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.100.85:1883');

const app = express();

client.on('connect', () => {
    client.subscribe('test', (err) => {
        if(!err) console.log('Subscribed to topic: test');
    })
})

client.on('message', (topic, message) => {
    console.log(message.toString());
})

app.listen(port);