const express = require('express');
const app = express();

const port = 8083;

app.get('/payementList', (req, res) => {
    let response = {
        data: {
            item:[
                {id:1, name:'Payement 1'},
                {id:2, name:'Payement 2'},
            ]
        }
    }
    res.status(200).json(response);
})

app.listen(port, () => {
    console.log(`Server is listenting on port ${port}`)
})