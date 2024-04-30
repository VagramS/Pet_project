const express = require('express');
const v1RouterStore = require('./v1/routes/Item_table_Routes');
const db = require("./Database/Connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/item", v1RouterStore);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});