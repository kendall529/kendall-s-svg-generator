const inquirer = require('inquirer');

const fs = require('fs');

const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters of text:',
        validate: (input) => {
            if(input.length > 3) {
                return "Input must be no more than 3 character!"
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape:',
    },
]

inquirer
    .prompt(questions)
    .then((responses) => {
        writeToFile('logo.svg', responses);
    })
    .catch((error) => {
        console.error('Error', error);
    });

function writeToFile(fileName, responses) {
    let svgResult = ''

    svgResult += `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`

    let shapeResult;

    switch (responses.shape) {
        case 'Triangle':
            shapeResult = new Triangle();
            svgResult += `<polygon points="34.5299, 200 150, 0 265.4701, 200" fill="${responses.shapeColor}" />`
            break;
        case 'Circle':
            shapeResult = new Circle();
            svgResult += `<circle cx="150" cy="100" r="100" fill="${responses.shapeColor}" />`
            break;
        default:
            shapeResult = new Square();
            svgResult += `<rect x="50" y="0" width="200" height="200" fill="${responses.shapeColor}" />`
            break;
    }

    svgResult += `<text x="150" y="150" font-size="60" text-anchor="middle" fill=${responses.textColor}>${responses.text}</text>
    </svg>`

    fs.writeFile(fileName, svgResult, (err) => err ? console.log(err) : console.log(`Generated logo.svg`));
}



