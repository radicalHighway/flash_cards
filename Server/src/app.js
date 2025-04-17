const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
const express = require('express');
const serverConfig = require("./config/serverConfig")
const indexRouter = require('./routes/index.router');

const app = express();

serverConfig(app);

const PORT = process.env.PORT || 3002;

app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
