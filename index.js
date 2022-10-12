const fs = require("fs");
const inquirer = require("inquirer")
const Employee = require("./employeejs/Employee.js")
const Intern = require("./employeejs/Intern.js")
const Engineer = require("./employeejs/Engineer.js")
const Manager = require("./employeejs/Manager.js")
const content = []

function generateFile() {
    const allCards = content.reduce((prev, item) => {
        return prev + item.render()
    }, '');
    const html = Employee.renderBaseTemplate(allCards)
    fs.writeFileSync("./public/index.html", html)
}

const questions = [
    {
        type: "input",
        message: "Team managers name?",
        name: "name",
    },
    {
        type: "input",
        message: "Team manager ID number?",
        name: "id",
    },
    {
        type: "input",
        message: "Team manager email address?",
        name: "email",
    },
    {
        type: "input",
        message: "Team manager office number?",
        name: "officeNumber",
    },

]

function askTheQuestion() {
    const theQuestion = [
        {
            type: "list",
            message: "Enter new employee",
            name: "employeeType",
            choices: ["Engineer", "Intern", "Finish building my team"]
        },
    ]
    inquirer.prompt(theQuestion).then((answers) => {
        if (answers.employeeType === "Engineer")
            createEngineer();
        else if (answers.employeeType === "Intern")
            createIntern();
        else
            generateFile();
    })
}

function createEngineer() {
    const engineerQuestions = [

        {
            type: "input",
            message: "Engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Engineer's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "Engineer's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "Engineer's Github username?",
            name: "github",
        },
    ]
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github);
        content.push(engineer)
        askTheQuestion()
    })
}


function createIntern() {
    const internQuestions = [
        {
            type: "input",
            message: "Intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Intern's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "Intern's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "Intern's school?",
            name: "school",
        },
    ]
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.id, answers.name, answers.email, answers.school);
        content.push(intern);
        askTheQuestion();
    })
}

inquirer.prompt(questions).then((answers) => {
    let employee = new Manager(answers.id, answers.name, answers.email, answers.officeNumber);
    content.push(employee)
    console.log(employee)
    askTheQuestion();
})