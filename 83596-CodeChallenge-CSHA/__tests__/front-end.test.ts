
const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("gets the logging endpoint", async () => {
    const response = await request.get("/logging");
    expect(response.status).toBe(200);
});