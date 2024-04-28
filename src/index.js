const express = require('express');
const v1RouterStore = require('./v1/routes/storeRoutes');
const db = require("./Database/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/store", v1RouterStore);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});