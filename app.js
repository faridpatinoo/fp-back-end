const express = require('express');
const videoRouter = require('./3-Routes/videoRoutes');
const brandRouter = require('./3-Routes/brandRoutes');

const app = express();
app.use(express.json());

app.use('/api/videos', videoRouter);
app.use('/api/brands', brandRouter);

module.exports = app;