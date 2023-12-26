const request = require("supertest");
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test Query Parameter", async () => {
    const response = await request(app)
        .get("/")
        .query({ firstName: "Alfaizuna" , lastName: "Aulia"});
    expect(response.text).toBe("Hello Alfaizuna Aulia");
});


