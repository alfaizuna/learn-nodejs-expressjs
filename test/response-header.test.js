const request = require("supertest");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.set({
        "X-Powered-By": "Programmer",
        "X-Author": "Alfa"
    });
    res.send(`Hello Response`);
});

test("Test Response Header", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response");
    expect(response.get("X-Powered-By")).toBe("Programmer");
    expect(response.get("X-Author")).toBe("Alfa");
});
