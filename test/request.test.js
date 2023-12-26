const request = require("supertest");
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

test("Test ExpressJS", async () => {
   const response = await request(app).get("/");
   expect(response.text).toBe("Hello, Express!");
});


