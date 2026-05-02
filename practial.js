const express = require("express");

const app = express();

const authMiddleware = (req, res, next) => {
    if (req.headers.authorization === "admin123") {
        next();
    } else {
        res.status(403).send("403 Access Denied");
    }
};

app.get("/public", (req, res) => {
    res.send("Public route");
});

app.get("/private", authMiddleware, (req, res) => {
    res.send("Welcome to private route");
});

app.listen(3000);
