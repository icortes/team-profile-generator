const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and officeNumber", () => {
            const manager = new Manager("Farley", 4, "email@company.com", 56);

            expect(manager).toEqual({name: "Farley", id: 4, email: "email@company.com", officeNumber: 56});
        });
    });

    describe("getRole", () => {
        it("should return the manager's role", () => {
            const manager = new Manager("Farley", 4, "email@company.com", 56);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});