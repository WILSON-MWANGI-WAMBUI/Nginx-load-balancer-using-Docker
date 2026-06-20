const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const replicaApp = ProcessingInstruction.env.APP_NAME

app.use('/images', express.static(path.join(_dirname, 'images')));

app.use('/', (req, res)=>{
    res.sendFile(path.join(_dirname, 'index.html'));
    console.log('Request served by ${replicaApp} ');
});

app.listen('${replicaApp} is listening on port ${port}');