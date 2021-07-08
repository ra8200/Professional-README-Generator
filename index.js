// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
init();

function init(){
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is  project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of the application?',
    },
    {
      type: 'list',
      message: 'What License would you preer?',
      name: 'license',
      choices: ['MIT', 'ISC', 'APACHE',"GPL","None"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Terms of Usage: ',
    }
  ])
  .then((data) => {
    var READMEContent = `
  # ${data.name}
  ## Description:
  ${data.Description}

  Table of Contents
  ------------------
  * [Usage](#usage)
  * [Installation](#installation)
    
    # Installation
    ${data.installation}

    # Usage
    ${data.usage}
    `
    console.log(READMEContent)
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile("README.md", READMEContent,function(err,success) {
      err ? console.log(err) : console.log('Success!');
    });
  })}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
