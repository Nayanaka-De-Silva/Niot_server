const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html')
})

io.on('connection', (socket) => {
    console.log('A user has connected')

    socket.on('disconnect', () => {
        console.log('A user has disconnected')
    })
})

http.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})