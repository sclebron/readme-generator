// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { mainModule } = require('process');
// TODO: Create an array of questions for user input
const promptQuestions = [
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the title of your project',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter the description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please enter the usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Please enter the test instructions?',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'Please choose your license',
            choices: ['Apache', 'BSD', 'GNU GPL v3', 'MIT', 'none of the above',],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username',
            name: 'git',
        }, 
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'email',
        }
    ])
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// // // TODO: Create a function to initialize app
function init() {
	inquirer.prompt(promptQuestions).then((response) => {
        console.log('Creating README');
        const markdown = generateMarkdown(response);
    });
}

// // // Function call to initialize app
init();
