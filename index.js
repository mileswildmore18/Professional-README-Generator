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
        name: 'title',
        message: `What is your project's title?`,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations did you use for your project?'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What items did you use to create your repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who helped contribute to your repo?'
    }
]


//Creates a function to write README file
function writeToFile(fileName, data) { }
fs.writeFile('readme.md', string, (error) => {
    if (error) throw error;
})

//Creates a function to initialize app
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
