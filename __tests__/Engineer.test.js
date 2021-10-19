const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () =>{
        it("should create an object with a name, id, email, and github", () => {
            const engineer = new Engineer("Mike", 2, "email@gmail.com", "mike");

            expect(engineer).toEqual({name: "Mike", id: 2, email: "email@gmail.com", github: "mike"});
        });
    });

    describe("getGithub", () => {
        it("should return the engineer's github username", () => {
            const engineer = new Engineer("Mike", 2, "email@gmail.com", "mike");

            expect(engineer.getGithub()).toEqual("mike");
        });
    });

    describe("getRole", ()=> {
        it("should return the engineer's role", () => {
            const engineer = new Engineer("Mike", 2, "email@gmail.com", "mike");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});