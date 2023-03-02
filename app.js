const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const crearRouter = require('./routes/crear');
const verRouter = require('./routes/ver');

const {connect} = require('./db/db');

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use('/crear', crearRouter);
app.use('/ver', verRouter);

connect();

module.exports = app;