const express = require('express');
const server = express();
const PORT = process.env.PORT || 80;

const data = {};

server.use(express.static("./build"));
server.get("/api", (req, res) => {
    res.status(200).json(data);
});

server.listen(PORT, () => console.log(`Ribb.it is now live on port ${PORT}`))