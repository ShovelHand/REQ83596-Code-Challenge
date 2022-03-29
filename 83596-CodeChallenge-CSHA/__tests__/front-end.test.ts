
const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("gets the logging endpoint. Make sure it returns an OK response", async (done) => {
    const response = await request.get("/logging");
    expect(response.status).toBe(200);
});

// it("sending a name to server updates tracking variables", async () => {
//     const response = await request.post("/logging?name=Cpt.Janeway");
//     expect(response.status).toBe(200);
//  //   expect(request.lastFiveNames[0]).toBe("Cpt.Janeway");
// });