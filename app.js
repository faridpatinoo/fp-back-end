const express = require('express');
const videoRouter = require('./videoRoutes');

const app = express();
app.use(express.json());

app.use('/api/videos', videoRouter);

module.exports = app;
