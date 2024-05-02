const express = require('express');

const {DB_Router} = require('./v1/routes/db_router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", DB_Router);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});