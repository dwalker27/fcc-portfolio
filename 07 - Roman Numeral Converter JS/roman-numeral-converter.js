function convertToRoman(num) {
  let romanStr = "";
  let roman = { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 };
  let romanKeys = Object.keys(roman);
  for (let key in romanKeys) {
    let times = Math.floor(num / roman[romanKeys[key]]);
    romanStr += romanKeys[key].repeat(times);
    num -= times * roman[romanKeys[key]];
  }
  console.log(romanStr);
  return romanStr;
}