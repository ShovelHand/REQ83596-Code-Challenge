const Server = require("../server");

describe("Get all Articles", () => {
    test("Get all Articles", async () => {
        const articles = await Server.app.get("/logging").get('/api/v1/pets').then((res) => {
            expect(res.statusCode).toBe(200);
      
    });
