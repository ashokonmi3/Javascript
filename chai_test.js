const chai = require("chai");
const expect = chai.expect;

// describe("Basic Chai Assertions", function () {
//   it("should validate simple values", function () {
//     let name = "Vandana";
//     let age = 30;

//     expect(name).to.equal("Vandana");
//     expect(age).to.be.a("number");
//     expect(age).to.be.greaterThan(18);
//   });

//   it("should validate simple values negative", function () {
//     let name = "Vandana";
//     let age = 30;

//     expect(name).to.equal("Vandana");
//     expect(age).to.be.a("number");
//     expect(age).to.be.greaterThan(38);
//   });
// });

// =======================

// it("should validate array values", function () {
//   const skills = ["Python", "Selenium", "API"];

//   expect(skills).to.include("Python");
//   expect(skills).to.have.lengthOf(3);
//   expect(skills).to.be.an("array");
// });

// it("should fail for incorrect value", function () {
//   const role = "Tester";

//   expect(role).to.not.equal("Developer");
// });
// =====================

pm.test("Validate user API", function () {
  let res = pm.response.json();

  pm.response.to.have.status(200);
  pm.expect(res.id).to.exist;
  pm.expect(res.name).to.be.a("string");
});
