class Shape {
    constructor() {
      this.shapeColor = "";
    }
    setColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="75, 6 244, 194 26, 194" fill="${this.shapeColor}" />`;
    }
  }
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
  }
  
  
  module.exports = { Triangle, Circle, Square };