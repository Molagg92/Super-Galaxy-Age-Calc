export default class HomoSapien {
  constructor(age, birthYear){
    this.age = age,
    this.birthYear = birthYear;
  } mercuryCalc() {
    const mercuryAge = Math.round(this.age * 0.24);
    return mercuryAge;
  }
}
