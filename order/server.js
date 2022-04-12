const express = require('express');
const app = express();

const port = 8081;

app.get('/orderList', (req, res) => {
    let response = {
        data: {
            item:[
                {id:1, name:'Order 1'},
                {id:2, name:'Order 2'},
            ]
        }
    }
    res.status(200).json(response);
})

app.listen(port, () => {
    console.log(`Server is listenting on port ${port}`)
})