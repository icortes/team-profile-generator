const Employee = require("./Employee");

class Engineer extends Employee {
    // name, id, email, github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //return github username
    getGithub() {
        return this.github;
    }

    //return's role
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;