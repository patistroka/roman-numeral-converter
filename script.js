const number = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

// Function to convert number to Roman numeral
function convertToRoman(number) {

  // array of roman numerals and their values
  const romanNumerals = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 }
  ];

  // initialize result
  let result = "";

  // 
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }
  return result;
}

// EventListener + if/alert
convertBtn.addEventListener("click", () => {
  const inputValue = number.value.trim();

  if (!inputValue) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (inputValue < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputValue >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumeral = convertToRoman(parseInt(inputValue));
  output.innerText = romanNumeral;
});
