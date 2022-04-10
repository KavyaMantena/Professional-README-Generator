// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please provide a description of the project');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please provide the installation information');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to you use your app?',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please provide the usage information');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'madeWith',
        message: 'What technologies are used to build this application?',
        validate: madeWithInput => {
          if (madeWithInput) {
            return true;
          } else {
            console.log('Please provide the information');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please provide the license that is used for this project?',
        choices: ['Apache', 'MIT', 'Eclipse Public License 1.0', 'Mozilla Public License 2.0', 'The Perl License']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute?',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please provide the contribution information');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How can a user test this application?',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please provide the tests information');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Add your Github username so users can ask questions',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please provide the Github username ');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'E-mail',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please provide E-mail');
            return false;
          }
        }
      },
    ])

}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data),
    error => {
      if (error) {
        console.log('Please input all the data')
      }
      console.log('Your README is generated')
    }
  )
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(data => {
      console.log(data);
      writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();