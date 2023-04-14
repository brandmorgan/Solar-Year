import Conversions from "../src/solar.js";


// class SolarConversions {
//     constructor(age)
//     this.age = age;
// }



  const calculateAgeOnOtherPlanets =('./calculateAgeOnOtherPlanets');
  function calculateAgeOnOtherPlanets(ageInYears) {
describe('calculateAgeOnOtherPlanets', () => {
  test ('returns the correct age on Mercury', () => {
    const ageInYears = 30;
    const expectedAge = ageInYears / 0.24; // Calculated based on Mercury's orbital period
    const result = calculateAgeOnOtherPlanets(ageInYears, 'mercury');
    expect(result).toBeCloseTo(expectedAge);
  })