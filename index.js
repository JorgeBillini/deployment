const express = require('express');
const app = express();
const port = 8002;

app.listen(port,()=>{
    console.log('now running', port);
})

