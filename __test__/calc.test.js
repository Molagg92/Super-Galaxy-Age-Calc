import HomoSapien from "../src/calc.js";

describe('HomoSapien', () => {
  test('should return erik as 30 and 1992', () => {
    const erik = new HomoSapien(30, 1992);
    expect(erik.age).toEqual(30);
    expect(erik.birthYear).toEqual(1992);
  })
});