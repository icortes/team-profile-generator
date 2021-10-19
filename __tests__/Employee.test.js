const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () =>{
        it("should create an object with a name, id, and email if provided valid arguments", () =>{
            const employee = new Employee("Mike", 1, "my_email@gmail.com");

            expect(employee.name).toEqual("Mike");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("my_email@gmail.com");
        });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const employee = new Employee("Mike", 1, "my_email@gmail.com");

            expect(employee.getName()).toEqual("Mike");
        });
    });

    describe("getId", () => {
        it("should return the id of the employee", () =>{
            const employee = new Employee("Mike", 1, "my_email@gmail.com");

            expect(employee.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () =>{
            const employee = new Employee("Mike", 1, "my_email@gmail.com");

            expect(employee.getEmail()).toEqual("my_email@gmail.com");
        });
    });

    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const employee = new Employee("Mike", 1, "my_email@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });

});