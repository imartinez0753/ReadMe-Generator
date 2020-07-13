const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const md = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "project",
      message: questions[0]
    },
    {
      type: "input",
      name: "description",
      message: questions[1]
    },
    {
      type: "input",
      name: "installation",
      message: questions[2]
    },
    {
      type: "input",
      name: "usage",
      message: questions[3]
    },
    {
      type: "input",
      name: "contribution",
      message: questions[4]
    },
    {
      type: "input",
      name: "test",
      message: questions[5]
    },
    {
      type: "checkbox",
      name: "license",
      message: questions[6],
      choices: ["option1", "option2", "option3"]
    },
    {
      type: "input",
      name: "gitHub",
      message: questions[7]
    },
    {
      type: "input",
      name: "email",
      message: questions[8]
    }
  ]);
}

// array of questions for user
const questions = [
  "What is the Project Title?",
  "Please enter a description of project",
  "enter installation instructions",
  "Please enter usage information",
  "Please enter contribution guidelines",
  "Please enter test instructions",
  "Please select license information",
  "Please enter Github username",
  "Please eneter your e-mail"
];

promptUser().then(function (answer) {
  const readMe = md(answer);
  return writeFileAsync(`${answer.project}.md`, readMe, function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log("successful creation");
    }
  });
});
