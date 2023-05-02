const Shapes = require("./shapes");

// tests all the shape render functions
describe('Shapes', () => {
    // tests if it makes a square with no params
    describe('render square', () => {
        it('should create green square code since no params were given so it uses default value', () => {
            const shape = new Shapes();
            const square = shape.renderSquare();
            expect(square).toEqual(`<rect width="300" height="300" style="fill:green;" />`);
        });
    });
    // tests if the correct circle was made
    describe('render circle', () => {
        it('should create blue circle code', () => {
            const shape = new Shapes('svg', 'white', 'circle', 'blue');
            const circle = shape.renderCircle();
            expect(circle).toEqual(`<circle cx="150" cy="150" r="150" fill="blue" />`);
        });
    });

    // tests if the correct triangle was made
    describe('render triangle', () => {
        it('should create purple triangle code', () => {
            const shape = new Shapes('svg', 'white', 'triangle', 'purple');
            const triangle = shape.renderTriangle();
            expect(triangle).toEqual(`<polygon points="0,300 300,300 150,0" style="fill:purple;" />`);
        });
    });
});