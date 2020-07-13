// function to generate markdown for README
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
[license](#license)
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
