// TODO: Include packages needed for this application
//Packages required for this application
const inquirer = require('inquirer');

const fs = require('fs')


// Creates an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email address',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'Project',
        message: `What is your project's title?`,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'Dependencies',
        message: 'What command should be run to install dependencies?'

    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
fs.writeFile('readme.md', string, (error) => {
    if (error) throw error;
})

// TODO: Create a function to initialize app
function init() { }
//ask the questions
inquirer.prompt(questions).then((answers) => {
    //pass the answers to the big string
    const string = generateMarkdown(answers)
    //write the fle with that string
    writeToFile("readme.md", string)
})

// Function call to initialize app
init();

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
