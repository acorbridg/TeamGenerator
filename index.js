import fs from "fs";
import inquirer from "inquirer"
import Intern from "./employeejs/Intern.js"
import Engineer from "./employeejs/Engineer.js"
import Manager from "./employeejs/Manager.js"
const content = [new Engineer("1", "audrey", "adybass@gmail.com", "acorbridg")]

const EmployeeTemplate = `
<div class="card employee">
    <div class="card-header">
        <h1 class="title">$NAME</h1>
        <h2 class="title"><i class="fas fa-mug-hot"></i>$TITLE</h2>
    </div>
    <div class="card-body">
        <ul class="information">
            <li>ID: $IDNUMBER</li>
            <li>Email: <a href="mailto:email address">$EMAIL</a></li>
            <li>Phone: $PHONE</li>
        </ul>
    </div>
</div>`;

const ManagerTemplate = `
<div class="card employee">
    <div class="card-header">
        <h1 class="title">$NAME</h1>
        <h2 class="title"><i class="fas fa-mug-hot"></i>$TITLE</h2>
    </div>
    <div class="card-body">
        <ul class="information">
            <li>ID: $IDNUMBER</li>
            <li>Email: <a href="mailto:email address">$EMAIL</a></li>
            <li>Phone: $PHONE</li>
            <li>Office Number: $OFFICE </li>
        </ul>
    </div>
</div>`;

function generateFile () {
    fs.readFile('./src/htmltemplate.html', 'utf8', function(err, html){
        let allCards = ""
        content.forEach(element => {
            let currentCard = EmployeeTemplate.slice();
            currentCard = currentCard.replace("$NAME", element.getName());
            currentCard = currentCard.replace("$TITLE", element.getRole());
            currentCard = currentCard.replace("$EMAIL", element.getEmail());
            currentCard = currentCard.replace("$IDNUMBER", element.getId());;
            allCards += currentCard
        });
        html = html.replace("$CARD", allCards )
        fs.writeFileSync("./public/index.html", html)
    });
}

const questions = [
    {
        type: "input", 
        message: "what is your name?",
        name: "name",
    },
    {
        type: "input", 
        message: "employee title?",
        name: "title",
    },  
    {
        type: "input", 
        message: "phone number?",
        name: "phone",
    },  
    {
        type: "input", 
        message: "employee email address",
        name: "email",
    },  
    {
        type: "input", 
        message: "employee id?",
        name: "id",
    },
    {
        type: "input", 
        message: "github page?",
        name: "github",
    }
]

inquirer.prompt(questions).then((answers) => {
    let employee = new Engineer(answers.id,answers.name,answers.email,answers.github) 
    content.push(employee)
    console.log(content)
    generateFile()
});

// //add employeejs

// //add template HTML
    
// const createHTML = require("./src/templatehelpercode.html")
// console.log(createHTML)
// //array of questions
// async function questions() {
//     const content = await inquirer
//         .prompt([
//             {
//                 type: "input",
//                 message: "Team managers name?",
//                 name: "name",
//             },
//             {
//                 type: "input",
//                 message: "Team manager ID number?",
//                 name: "ID",
//             },
//             {
//                 type: "input",
//                 message: "Team manager email address?",
//                 name: "email",
//             },
//             {
//                 type: "input",
//                 message: "Team manager office number?",
//                 name: "officeNumber",
//             },
//         ])
//     }

    // const createTeam = async function questions () {
    //     const createMember = await inquirer
    //     .createPromptModule([
    //         {
    //             type: "list",
    //             message: "Enter new employee",
    //             name: "employeeType",
    //             choices: ["Engineer", "Intern", "Finish building my team"]
    //         },
    //     ])  
    // }

    //     if (createMember.employeeType === "Engineer") {
    //         const engineerQuestions = await inquirer
    //         .createPromptModule([
    //             {
    //                 type: "input",
    //                 message: "Engineer's name?",
    //                 name: "engineerName",
    //             },
    //             {
    //                 type: "input",
    //                 message: "Engineer's ID number?",
    //                 name: "engineerID",
    //             },
    //             {
    //                 type: "input",
    //                 message: "Engineer's email address?",
    //                 name: "engineerEmail",
    //             },
    //             {
    //                 type: "input",
    //                 message: "Engineer's Github username?",
    //                 name: "engineerGithub",
    //             },
    //         ])
    //         return createTeamMember;
    //     }

    //     else if (answers.employeeType === "Intern") {
    //         const internQuestions = await inquirer
    //         .createPromptModule([
    //             {
    //                 type: "input",
    //                 message: "Intern's name?",
    //                 name: "internName",
    //             },
    //             {
    //                 type: "input",
    //                 message: "Intern's ID number?",
    //                 name: "internID",
    //             },
    //             {
    //                 type: "input",
    //                 message: "Intern's email address?",
    //                 name: "internEmail",
    //             },
    //             {
    //                 type: "input",
    //                 message: "Intern's school?",
    //                 name: "internOffice",
    //             },
    //         ])
    //         return createTeamMember;
    //     }

        // else {
        //     const writeHtml = () => {
        //         const html = createHTML(content);
        //         fs.writeFileSync("./public/index.html", html)
        //     }   
        // }

    // <div class="card employee">
    //     <div class="card-header">
    //         <h1 class="title">Name of employee</h1>
    //         <h2 class="title"><i class="fas fa-mug-hot"></i>Job title</h2>
    //     </div>
    //     <div class="card-body">
    //         <ul class="information">
    //             <li>ID: ID number</li>
    //             <li>Email: <a href="mailto:email address">email address</a></li>
    //             <li>Phone: phone number</li>
    //         </ul>
    //     </div>
    // </div>

// // //function to write the actual HTML to index.html
// const writeHtml = () => {
//     //function createHTML using answers
//     const html = createHTML(answers);
//     fs.writeFileSync("./public/index.html", html)
// }