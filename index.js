const inquirer = require("inquirer");
const fs = require("fs");

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
      type: "input",
      name: "license",
      message: questions[6]
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
  "Please enter usage infromation",
  "Please enter contribution guidelines",
  "Please enter test instructions",
  "Please enter license information",
  "Please enter Github username",
  "Please eneter your e-mail"
];

function generateReadME(answer) {
  return `
# ${answer.project}
${answer.description}

## Table of Contents

[${answer.installation}](##instructions)
[${answer.usage}](##usage)
[${answer.contribution}](##contribution)
[${answer.test}](##test)
[${answer.license}](##license)
[${answer.gitHub}](##gitHub)
[${answer.email}](##email)

##instructions


##usage

##contribution

##test

##license

##gitHub

##email

`;
}
promptUser().then(function (answer) {
  const readMe = generateReadME(answer);
  return writeFileAsync(`${answer.project}` + ".md", readMe);
});

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
// function init() {}

// function call to initialize program
// init();
