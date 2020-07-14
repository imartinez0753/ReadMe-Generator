// function to generate markdown for README
//I don't know how to dynamically create the following code for badges, I would have liked to have them created only if the user made a selection in the command line.
function generateReadME(answer) {
  return `
  [![Generic badge](https://img.shields.io/badge/<license>-<${answer.license[0]}>-<COLOR>.svg)](https://shields.io/)
  [![Generic badge](https://img.shields.io/badge/<license>-<${answer.license[1]}>-<COLOR>.svg)](https://shields.io/)
  [![Generic badge](https://img.shields.io/badge/<license>-<${answer.license[2]}>-<COLOR>.svg)](https://shields.io/)

# ${answer.project}
${answer.description}

## Table of Contents

[Instruction](#instructions)
[Usage](#usage)
[contribution](#contribution)
[test](#test)
[gitHub](#question)
[e-mail](#e-mail)

## Instructions 
${answer.installation}


## Usage
${answer.usage}

## Contribution
${answer.contribution}

## Test
${answer.test}


## Questions

${answer.gitHub} 
${answer.email}


`;
}

module.exports = generateReadME;
