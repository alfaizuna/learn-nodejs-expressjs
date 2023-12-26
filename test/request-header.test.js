const request = require("supertest");
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const type = req.get("accept");
    res.send(`Hello ${type}`);
});

test("Test Query Parameter", async () => {
    const response = await request(app).get("/")
        .set("Accept", "text/plain");
    expect(response.text).toBe("Hello text/plain");
});