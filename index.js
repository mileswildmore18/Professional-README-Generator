//Packages required for this application
const inquirer = require('inquirer');

const fs = require('fs')


// Creates an array of questions for user input
const questions = [

    {   //Asks the user for the Github name
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {   //Asks the user for their e-mail address
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {   //Asks the user for their project title
        type: 'input',
        name: 'title',
        message: `What is your project's title?`,
    },
    {   //Asks the user for a description of what their project is about
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {   //Asks the user for what kind of license they want on their project
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPLv3.0', 'BSD_3', 'None'],
    },
    {   //Asks the user what installations they used for the project
        type: 'input',
        name: 'installation',
        message: 'What installations did you use for your project?'

    },
    {   //Asks the user what commands should be used to run tests
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?'
    },
    {   //Asks the user what items were used to create the repo
        type: 'input',
        name: 'usage',
        message: 'What items did you use to create your repo?'
    },
    { //Asks the user who contributed to the repo
        type: 'input',
        name: 'contributing',
        message: 'Who helped contribute to your repo?'
    }
]


//Creates a function to write README file
function writeToFile(fileName, data) { 
fs.writeFile('readme.md', data, (error) => {
    if (error) throw error;
})
}
//Creates a function to initialize app
function init() { }
//ask the questions
inquirer.prompt(questions).then((answers) => {
    //pass the answers to the big string
    const string = generateMarkdown(answers)
    //write the file with that string
    writeToFile("readme.md", string)
})

// Function call to initialize app
init();

const generateMarkdown = require('./utils/generateMarkdown');
