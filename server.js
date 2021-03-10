const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html')
})

io.on('connection', (socket) => {
    console.log('Device is connected')

    socket.emit('test', 'Test Message')

    socket.on('disconnect', () => {
        console.log('Device has disconnected')
    })
})

http.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})