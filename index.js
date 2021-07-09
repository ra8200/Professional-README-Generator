const inquirer = require('inquirer');
const fs = require('fs');

const questions = [];
init();

function init(){
inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What does your application do?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What type of testing is need?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Terms of Usage:',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'What does the contributor need to know to contribute to this repo?',
    },
    {
      type: 'list',
      message: 'What License do you need?',
      name: 'license',
      choices: ['MIT', 'ISC', 'APACHE',"GPL","None"],
    }
  ])

  .then((data) => {
    var READMEContent = `
  # ${data.name}
  ## Description:
  ${data.description}

  Table of Contents
  ------------------
  * [Github](#github)
  * [Email](#email)  
  * [Usage](#usage)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Contributors](#contributors)
  * [License](#license)
  
    ### Github
    [Developer Profile](https://github.com/${data.github})
  
    ### Email
    ${data.email}

    ### Installation
    ${data.installation}

    ### Usage
    ${data.usage}
    
    ### Testing 
    ${data.testing}

    ### Contributors
    ${data.contributors}
    
    ### License
    ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
    
    `

    console.log(READMEContent)
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile("README.md", READMEContent,function(err,success) {
      err ? console.log(err) : console.log('Success!');
    });
  })}
function writeToFile(fileName, data) {}
