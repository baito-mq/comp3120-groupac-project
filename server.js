const express = require('express');
const server = express();
const PORT = process.env.PORT || 80;
const fs = require("fs");

const data = {
    comments: JSON.parse(fs.readFileSync("./dev/comments.json")),
    posts: JSON.parse(fs.readFileSync("./dev/posts.json")),
    users: JSON.parse(fs.readFileSync("./dev/users.json"))
};

server.use(express.static("./build"), express.json());
server.get("/api", (req, res) => {
    res.status(200).json(data);
});

function getTarget(url, getParent = false) {
    let path = url.split("/").slice(2);
    let obj = data;
    for (let i = 0; i < (getParent ? path.length - 1 : path.length); i++) {
        let key = path[i];
        let nextObject = obj[key];
        if (!nextObject) {
            return null;
        }
        if (i < path.length - 1 && typeof(nextObject) !== "object") {
            return null;
        }
        obj = nextObject;
    }
    return obj;
}

server.get("/api/*", (req, res) => {
    let obj = getTarget(req.originalUrl);
    if (obj) res.status(200).json(obj).end();
    else res.status(404).send("Not Found").end();
})

server.post("/api/*", (req, res) => {
    let obj = getTarget(req.originalUrl);
    if (!obj) {
        res.status(404).send("Not Found").end();
        return;
    }

    if (Array.isArray(obj)) {
        let json = req.body;
        for (let i = 0; i <= obj.length; i++) {
            if (obj[i] === undefined) {
                json.id = i;
                obj[i] = json;
                res.status(200).json(json).end();
                return;
            }
        }
        res.status(500).send("Something went wrong").end();
    } else {
        res.status(405).send("Cannot POST to non-array, or array-like object").end();
    }
});

server.put("/api/*", (req, res) => {
    let obj = getTarget(req.originalUrl);
    let parent = getTarget(req.originalUrl, true);
    if (!obj) {
        res.status(404).send("Not Found").end();
        return;
    }

    if (Array.isArray(parent)) {
        let data = req.body;
        if (data.id) data.id === undefined;

        let key = req.originalUrl.split("/").slice(2);
        key = key[key.length - 1];

        parent[key] = { ...obj, ...data};
        res.status(200).send(parent[key]).end();
    } else {
        res.status(405).send("Cannot PUT to non-arrays").end();
    }
})

server.listen(PORT, () => console.log(`Ribb.it is now live on port ${PORT}`))