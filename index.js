const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./src/generateHTML");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array of employees
var employees = [];

//questions
const questions = [{
        name: "managerName",
        type: "input",
        message: "Manager\'s name: ",
        required: "true"
    },
    {
        name: "managerId",
        type: "input",
        message: "Manager\'s ID: ",
        required: "true"
    },
    {
        name: "managerEmail",
        type: "input",
        message: "Manager\'s e-mail: ",
        required: "true"
    },
    {
        name: "managerOffice",
        type: "input",
        message: "Manager\'s Office Number: ",
        required: "true"
    },
    {
        name: "engineerOneName",
        type: "input",
        message: "Engineer\'s Name: ",
        required: "true"
    },
    {
        name: "engineerOneId",
        type: "input",
        message: "Engineer\'s ID: ",
        required: "true"
    },
    {
        name: "engineerOneEmail",
        type: "input",
        message: "Engineer\'s Email: ",
        required: "true"
    },
    {
        name: "engineerOneGithub",
        type: "input",
        message: "Engineer\'s Github username: ",
        required: "true"
    },
    {
        name: "engineerTwoName",
        type: "input",
        message: "Engineer\'s Name: ",
        required: "true"
    },
    {
        name: "engineerTwoId",
        type: "input",
        message: "Engineer\'s ID: ",
        required: "true"
    },
    {
        name: "engineerTwoEmail",
        type: "input",
        message: "Engineer\'s Email: ",
        required: "true"
    },
    {
        name: "engineerTwoGithub",
        type: "input",
        message: "Engineer\'s Github username: ",
        required: "true"
    },
    {
        name: "engineerThreeName",
        type: "input",
        message: "Engineer\'s Name: ",
        required: "true"
    },
    {
        name: "engineerThreeId",
        type: "input",
        message: "Engineer\'s ID: ",
        required: "true"
    },
    {
        name: "engineerThreeEmail",
        type: "input",
        message: "Engineer\'s Email: ",
        required: "true"
    },
    {
        name: "engineerThreeGithub",
        type: "input",
        message: "Engineer\'s Github username: ",
        required: "true"
    },
    {
        name: "internName",
        type: "input",
        message: "Intern\'s Name: ",
        required: "true"
    },
    {
        name: "internId",
        type: "input",
        message: "Intern\'s ID: ",
        required: "true"
    },
    {
        name: "internEmail",
        type: "input",
        message: "Intern\'s Email: ",
        required: "true"
    },
    {
        name: "internSchool",
        type: "input",
        message: "Intern\'s School: ",
        required: "true"
    }
]

function start() {
    inquirer.prompt(questions)
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            const engineerOne = new Engineer(response.engineerOneName, response.engineerOneId, response.engineerOneEmail, response.engineerOneGithub);
            const engineerTwo = new Engineer(response.engineerTwoName, response.engineerTwoId, response.engineerTwoEmail, response.engineerTwoGithub);
            const engineerThree = new Engineer(response.engineerThreeName, response.engineerThreeId, response.engineerThreeEmail, response.engineerThreeGithub);
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);

            employees = [manager, engineerOne, engineerTwo, engineerThree, intern];

            const html = generateHTML(employees);

            fs.writeFile(`./dist/${manager.getName()}Team.html`, html, (err) => {
                if(err) throw err;
                console.log("The file has been written!");
            })
        })
        .catch(err => {
            throw new Error(err);
        })
};

start();