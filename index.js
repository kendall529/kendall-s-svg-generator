const inquirer = require('inquirer');

const fs = require('fs');

const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters of text:',
        validate: (input) => input.length <= 3,
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

    let shapeResult, svgFragment;

    switch (responses.shape) {
        case 'Triangle':
            shapeResult = new Triangle();
            svgFragment += `<polygon points="75, 6 244, 194 26, 194" fill="${responses.shapeColor}" />`
            break;
        case 'Circle':
            shapeResult = new Circle();
            svgFragment += `<circle cx="150" cy="100" r="80" fill="${responses.shapeColor}" />`
            break;
        default:
            shapeResult = new Square();
            svgFragment += `<rect x="70" y="20" width="160" height="160" fill="${responses.shapeColor}" />`
            break;
    }

    svgResult += svgFragment;

    svgResult += `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${responses.textColor}>${responses.text}</text>
    </svg>`

    return svgResult;

    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log(`Generated logo.svg`));
}


