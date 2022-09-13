const express = require('express');
const fs = require('fs');
const app = express();
const dh = require('./DataHandler')

app.get('/',(req,res) => {
    res.send('Change the Url to "localhost:3000/orders"');
})

app.get('/orders',(req,res) => {
    // var jsonObj = JSON.parse(dh);
    res.send(dh)
})


app.listen(3000);


console.log('Listening on port 3000...')