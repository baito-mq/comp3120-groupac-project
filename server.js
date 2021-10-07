const express = require('express');
const server = express();

const data = {};

server.use(express.static("./build"));
server.get("/api", (req, res) => {
    res.status(200).json(data);
});