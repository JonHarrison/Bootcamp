const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages do you know?',
            choices: [ 'JS','Typescript','C','C++','C#','Java','Python','RUST','Ada' ]
        },
        {
            type: 'list',
            name: 'communication',
            message: 'What is your preferred method of communication?',
            choices: [ 'email','telephone','post','carrier pigeon', 'brick', 'none' ]
        },
    ])
    .then((response) => {
        fs.writeFile('output.txt', JSON.stringify(response), (err) => {
            err ? console.error(err) : console.log(response);
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
            console.log(error);
        }
    });

