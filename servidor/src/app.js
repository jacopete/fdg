const express = require('express');
const cors = require('cors');
const app=express();

//configuracion
app.set('port', process.env.PORT || 4000);
//para unir frontend con backend
app.use(cors());
//solo formatos json
app.use(express.json());
//routes
app.use('/roles',require('./routes/roles'));

module.exports =app;