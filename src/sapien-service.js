
export default class HomoSapien {
  constructor(age, birthYear) {
    this.age = age;
    this.birthYear = birthYear;
  } superGalaxyCalc() {
    const today = 2023;
    const input = document.getElementById('inputBtn');
    const inputBday = parseInt(input);
    if (inputBday < this.age) {
      const pastBday = Math.round(this.birthYear + inputBday);
      const yearsPastSince = Math.round(today - pastBday);
      const mercuryYearsPastSince = Math.round(yearsPastSince / 0.24);
      return mercuryYearsPastSince;
    } else {
      return 'test';
    }
  }
}









// const mercuryAge = Math.round(this.age / 0.24);
// const yearsPastSince = Math.round(today - pastBday);
// const mercuryAge = Math.round(this.age / 0.24);
//     return mercuryAge;