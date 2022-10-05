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
    const answers = await inquirer
}


//function to write the actual HTML to index.html
const writeHtml = () => {
    //function createHTML using answers
    const html = createHTML(answers);
    fs.writeFileSync("./public/index.html", html)
}   