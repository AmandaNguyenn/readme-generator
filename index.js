// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github name?'
    }, {
        type: 'input',
        name: 'title',
        message: 'What is the project name??'
    }, {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    }, {
        type: 'list',
        name: 'license',
        message: 'What is a license?',
        choices: ['MIT','APACHE2.0','GPL3.0','BSD3']
    }, {
        type: 'input',
        name: 'installation',
        message: 'What is an install command?'
    }, {
        type: 'input',
        name: 'test',
        message: 'Test command?'
    }, {
        type: 'input',
        name: 'usage',
        message: 'How to use?'
    }, {
        type: 'input',
        name: 'contributing',
        message: 'How do you contribute something?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
