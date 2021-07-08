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
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who contributed to this project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What type of testing is need?',
    }
  ])
  .then((data) => {
    var READMEContent = `
  # ${data.name}
  ## Description:
  ${data.description}

  Table of Contents
  ------------------
  * [Usage](#usage)
  * [Installation](#installation)
  * [License](#license)
  * [Github](#github)  
  * [Contributors](#contributors)
  * [Testing](#testing)

    ### Installation
    ${data.installation}

    ### Usage
    ${data.usage}

    ### License
    ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

    ### Github
    [Developer Profile](https://github.com/${data.github})

    ### Contributors
    ${data.contributors}

    ### Testing 
    ${data.testing}
    `

    console.log(READMEContent)
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile("README.md", READMEContent,function(err,success) {
      err ? console.log(err) : console.log('Success!');
    });
  })}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
