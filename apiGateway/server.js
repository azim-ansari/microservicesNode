const express = require('express');
const gateWay = require('fast-gateway');
const app = express();

const port = 9001;

const server = gateWay({
    routes: [
        {
            prefix: '/order',
            target: 'http://localhost:8081',
            hooks:{}
        }
    ]
})

server.get('/mytesting', (req, res) => {
    res.send('yes called gateway')
})

server.start(port).then(() => {
    console.log(`API Gateway is running on port ${port}`)
})