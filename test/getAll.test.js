const request = require("supertest");
const expect = require("chai").expect;

const BASE_URL = "http://localhost:3000"; 

describe("GET ALL PRODUCTS TEST", () => {
  it("should return 200 and list all products", async () => {
    const response = await request(BASE_URL).get("/api/products");

    const status = response.status;
    const email = "maha0196@algonquinlive.com"; 
    const testName = "getAll to show all product";

    if (status === 200) {
      console.log(`${email} - ${testName} - ${status} - PASSED`);
    } else {
      console.log(`${email} - ${testName} - ${status} - FAILED`);
    }

    expect(status).to.equal(200);
  });
});
