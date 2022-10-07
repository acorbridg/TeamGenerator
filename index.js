const fs = require("fs");
const inquirer = require("inquirer")
const answers = []
//add employeejs
const intern = require("./employeejs/intern.js")
const engineer = require("./employeejs/engineer.js")
const manager = require("./employeejs/manager.js")
//add template HTML
const createHTML = require("./src/templatehelpercode.html")
//array of questions
const questions = async function questions() => {
    const content = await inquirer
        .createPromptModule([
            {
                type: "input",
                message: "",
                name: "",
            },
            {
                type: "input",
                message: "Team managers name?",
                name: "name",
            },
            {
                type: "input",
                message: "Team manager ID number?",
                name: "ID",
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
        ])
        return createTeamMember;
    }

    const createTeam = async function questions () => {
        const createMember = await inquirer
        .createPromptModule([
            {
                type: "list",
                message: "Enter new employee",
                name: "employeeType",
                choices: ["Engineer", "Intern", "Finish building my team"]
            },
        ])  
    }

        if (createMember.employeeType === "Engineer") {
            const engineerQuestions = await inquirer
            .createPromptModule([
                {
                    type: "input",
                    message: "Engineer's name?",
                    name: "engineerName",
                },
                {
                    type: "input",
                    message: "Engineer's ID number?",
                    name: "engineerID",
                },
                {
                    type: "input",
                    message: "Engineer's email address?",
                    name: "engineerEmail",
                },
                {
                    type: "input",
                    message: "Engineer's Github username?",
                    name: "engineerGithub",
                },
            ])
            return createTeamMember;
        }

        else if (answers.employeeType === "Intern") {
            const internQuestions = await inquirer
            .createPromptModule([
                {
                    type: "input",
                    message: "Intern's name?",
                    name: "internName",
                },
                {
                    type: "input",
                    message: "Intern's ID number?",
                    name: "internID",
                },
                {
                    type: "input",
                    message: "Intern's email address?",
                    name: "internEmail",
                },
                {
                    type: "input",
                    message: "Intern's school?",
                    name: "internOffice",
                },
            ])
            return createTeamMember;
        }

        else (answers.employeeType === "Finish building my team") {
            const writeHtml = () => {
                const html = createHTML(content);
                fs.writeFileSync("./public/index.html", html)
            }   
        }
}


// //function to write the actual HTML to index.html
// const writeHtml = () => {
//     //function createHTML using answers
//     const html = createHTML(answers);
//     fs.writeFileSync("./public/index.html", html)
// }   