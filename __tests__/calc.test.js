const sum = require('./../src/index.js');

describe('sum', () => { 
  test('properly adds two number', () => {
    expect(sum(1, 2)).toEqual(3)
  });
});