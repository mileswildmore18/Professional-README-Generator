// TODO: Include packages needed for this application
//Packages required for this application
const inquirer = require('inquirer');

const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt(
    [
        {
    type: 'input',  
    name: 'description',
    message: 'What is the project title?',

    type: 'input',  
    name: 'description',
    message: 'What is your GitHub Name?',
    
    type: 'input',  
    name: 'description',
    message: 'What is your e-mail address?',

    type: 'input',
    name: 'description',

    type: 'list',  
    name: 'description',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        } 
]
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('readme.md', string,(error)=>{
    if (error) throw error;
})

// TODO: Create a function to initialize app
function init() {}
//ask the questions
inquirer.prompt(questions).then((answers) =>{
    //pass the answers to the big string
    const string = generateMarkdown(answers)
    //write the fle with that string
    writeToFile("readme.md", string)
})

// Function call to initialize app
init();

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
