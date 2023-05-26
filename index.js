const Inquirer = require('inquirer');

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

Inquirer
    .prompt(questions)
    .then((response) => {
        const {text, textColor, shape, shapeColor} = response;
        const svgData = generateSVG(text, textColor, shape, shapeColor);
        writeToFile('logo.svg', svgData);
    })
    .catch((error) => {
        console.error('Error', error);
    });

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log(`Generated logo.svg`));
}


function generateSVG(text, textColor, shape, shapeColor) {
    let shapeResult;

    if(shape === 'Triangle') {
        shapeResult = new Triangle();
        // shapeResult = `<polygon points="75, 6 244, 194 26, 194" fill="${shapeColor}" />`
    } else if (shape === 'Circle') {
        shapeResult = new Circle();

        // shapeResult = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
    } else if (shape === 'Square') {

        shapeResult = new Square();
        // shapeResult = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`
    }

    const svgInput = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        ${shapeResult}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>
    </svg>
    `;

    return svgInput;
}
