/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-11
 * @fileoverview This program asks the user for an initial deposit amount and an annual interest rate,
// then displays a 10-year table showing the balance growth each year without using loops.
 */

// constants
const NUM_YEARS: number = 10;

// variables
let initialValueAsString: string;
let interestRateAsString: string;
let initialValue: number;
let interestRate: number;
let year1Value: number;
let year2Value: number;
let year3Value: number;
let year4Value: number;
let year5Value: number;
let year6Value: number;
let year7Value: number;
let year8Value: number;
let year9Value: number;
let year10Value: number;

// input
initialValueAsString = prompt("Enter the initial deposit amount ($):") || "0";
interestRateAsString = prompt("Enter the annual interest rate (as a percent, e.g. 7 for 7%):") || "0";

initialValue = parseFloat(initialValueAsString);
interestRate = parseFloat(interestRateAsString) / 100;

// process
year1Value = initialValue + (initialValue * interestRate);
year2Value = year1Value + (year1Value * interestRate);
year3Value = year2Value + (year2Value * interestRate);
year4Value = year3Value + (year3Value * interestRate);
year5Value = year4Value + (year4Value * interestRate);
year6Value = year5Value + (year5Value * interestRate);
year7Value = year6Value + (year6Value * interestRate);
year8Value = year7Value + (year7Value * interestRate);
year9Value = year8Value + (year8Value * interestRate);
year10Value = year9Value + (year9Value * interestRate);

// output
console.log("\n");
console.log("Year".padEnd(10) + "Initial Value".padEnd(25) + "Interest Gained".padEnd(25) + "Current Value");
console.log("--------------------------------------------------------------");

console.log(
  `${"1".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(initialValue * interestRate).toFixed(2).padEnd(24)}$${year1Value.toFixed(2)}`
);
console.log(
  `${"2".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year1Value - initialValue).toFixed(2).padEnd(24)}$${year2Value.toFixed(2)}`
);
console.log(
  `${"3".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year2Value - year1Value).toFixed(2).padEnd(24)}$${year3Value.toFixed(2)}`
);
console.log(
  `${"4".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year3Value - year2Value).toFixed(2).padEnd(24)}$${year4Value.toFixed(2)}`
);
console.log(
  `${"5".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year4Value - year3Value).toFixed(2).padEnd(24)}$${year5Value.toFixed(2)}`
);
console.log(
  `${"6".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year5Value - year4Value).toFixed(2).padEnd(24)}$${year6Value.toFixed(2)}`
);
console.log(
  `${"7".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year6Value - year5Value).toFixed(2).padEnd(24)}$${year7Value.toFixed(2)}`
);
console.log(
  `${"8".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year7Value - year6Value).toFixed(2).padEnd(24)}$${year8Value.toFixed(2)}`
);
console.log(
  `${"9".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year8Value - year7Value).toFixed(2).padEnd(24)}$${year9Value.toFixed(2)}`
);
console.log(
  `${"10".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year9Value - year8Value).toFixed(2).padEnd(24)}$${year10Value.toFixed(2)}`
);

console.log("\nDone.");


