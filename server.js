const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello Gustavo')
});

app.listen(3001);