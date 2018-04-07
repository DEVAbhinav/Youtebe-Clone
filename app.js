var express = require('express');
let app = express();
const path = require('path');

app.use(express
    .static(path.join(__dirname)));



app.get('/',(req,res) => res.sendFile('./index.html', {"root" : '.'})); 

app.listen(8000);
module.exports = app;
console.log("server listening at 8000");