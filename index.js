const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes')

// creates the svg based on user input 
function makeSVG(response){
    const shapes = new Shapes(response.txt, response.txtColor, response.shape, response.shapeColor);
    let bgShape = null;
    if (response.shape == "square"){
        bgShape = shapes.renderSquare();
    }
    else if (response.shape == "circle"){
        bgShape = shapes.renderCircle();
    } else {
        bgShape = shapes.renderTriangle();
    }

    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
${bgShape}
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${response.txtColor}">${response.txt}</text>
</svg>`
}

// writes the file and calls makeSVG to make the code for the file
function createFile(response) {
    fs.writeFile("./examples/logo.svg", makeSVG(response), (err) =>
    err ? console.log(err) : console.log('\nGenerated logo.svg')
    );
}


// asks user for info for the logo. contains defaults if user adds nothing
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Text: ',
            name: 'txt',
            default: "svg",
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
            default: "white",
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
            default: "green",
        },
    ])
    .then((response) =>
        createFile(response)
    );
