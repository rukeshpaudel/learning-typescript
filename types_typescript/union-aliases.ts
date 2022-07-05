type combinable = number| string;
type conversionDescriptor = 'as-number' | 'as-text'

function combine(
  num1: combinable,
  num2: combinable,
  resultConversion: conversionDescriptor
) {
  let result;
  if (typeof num1 == "number" && typeof num2 === "number"|| resultConversion == "as-text") {
    return +num1 + +num2 + resultConversion;
  } else {
    result = num1.toString() + num2.toString() + resultConversion;
    return result;
  }
}

const combinedAges = combine(18, 23, "as-number");
console.log(combinedAges);

const combinedNames = combine("8", "20", "as-text");
console.log(combinedNames);
