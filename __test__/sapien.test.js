import  HomoSapien from "../src/sapien-service.js";

describe('HomoSapien', () => {
  test('should return erik as 30 and 1992', () => {
    const erik = new HomoSapien(30, 1992);
    expect(erik.age).toEqual(30);
    expect(erik.birthYear).toEqual(1992);
  })
});



describe('SuperGalaxyCalc', () => {
  test('should return how many yeas have passed since my 10th bday. 88', () => {
    const erik = new HomoSapien(30, 1992);
    const today = 2023;
    const inputBday = 10;
    const pastBday = Math.round(erik.birthYear + inputBday);
    const yearsPastSince = Math.round(today - pastBday);
    const mercuryYearsPastSince = Math.round(yearsPastSince / 0.24);
    erik.superGalaxyCalc();
    expect(mercuryYearsPastSince).toEqual(88);
  });
});