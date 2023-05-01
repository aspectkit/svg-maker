const inquirer = require('inquirer');
const fs = require('fs');

function createFile() {  
    console.log("\nGenerated logo.svg");
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Text: ',
            name: 'txt',
            validate: function(txtLength){
                if (txtLength.length > 3){
                    return "3 characters only";
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Text Color: ',
            name: 'txtColor',
        },
        {
            type: 'list',
            message: 'Which Shape?',
            name: 'shape',
            choices: ['square', 'circle', 'triangle'],
        },
        {
            type: 'input',
            message: 'Shape Color: ',
            name: 'shapeColor',
        },
    ])
    .then((response) =>
        createFile(response)
    );
