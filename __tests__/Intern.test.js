const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school", () => {
            const intern = new Intern("Jeff", 3, "email@school.com", "Berkeley");

            expect(intern).toEqual({name: "Jeff", id: 3, email: "email@school.com", school: "Berkeley"});
        });
    });

    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const intern = new Intern("Jeff", 3, "email@school.com", "Berkeley");

            expect(intern.getSchool()).toEqual("Berkeley");
        });
    });

    describe("getRole", () => {
        it("should return the intern's role", () => {
            const intern = new Intern("Jeff", 3, "email@school.com", "Berkeley");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});