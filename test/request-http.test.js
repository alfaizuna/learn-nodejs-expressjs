const request = require("supertest");
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send(`Hello, ${req.query.name}`);
});

test("Test Query Parameter", async () => {
   const response = await request(app).get("/").query({ name: "Express!" });
   expect(response.text).toBe('Hello, Express!');
});


