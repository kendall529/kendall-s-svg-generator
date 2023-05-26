const { Triangle, Circle, Square } = require("./shapes");

describe('Triangle', () => {
    it('Should render a red triangle', () => {
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render())
            .toEqual('<polygon points="75, 6 244, 194 26, 194" fill="red" />');
    });
});

describe('Circle', () => {
    it('Should render a red triangle', () => {
        const shape = new Circle();
        shape.setColor('#22333B');
        expect(shape.render())
            .toEqual('<circle cx="150" cy="100" r="80" fill="#22333B" />');
    });
});

describe('Square', () => {
    it('Should render a red triangle', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render())
            .toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
    });
});