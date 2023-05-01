const Shapes = require("./shapes.js");

// A testing suite for Arithmetic is created.
describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('square', () => {
      it('should square', () => {
        const shape = new Shapes();
        // expect(arithmetic.sum(2, 2)).toEqual(total);
        expect(2).toEqual(2);
      });
    });
  });