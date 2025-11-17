/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-11
 * @fileoverview This program asks the user for an initial deposit amount and an annual interest rate,
 * then displays a 10-year table showing the balance growth each year without using loops.
 */

// input
const initialValueAsString: string = prompt("Enter the initial deposit amount ($):") || "0";
const interestRateAsString: string = prompt("Enter the annual interest rate (as a percent, e.g. 7 for 7%):") || "0";

const initialValue: number = parseFloat(initialValueAsString);
const interestRate: number = parseFloat(interestRateAsString) / 100;

// yearly balances
const year1Value: number = initialValue + initialValue * interestRate;
const year2Value: number = year1Value + year1Value * interestRate;
const year3Value: number = year2Value + year2Value * interestRate;
const year4Value: number = year3Value + year3Value * interestRate;
const year5Value: number = year4Value + year4Value * interestRate;
const year6Value: number = year5Value + year5Value * interestRate;
const year7Value: number = year6Value + year6Value * interestRate;
const year8Value: number = year7Value + year7Value * interestRate;
const year9Value: number = year8Value + year8Value * interestRate;
const year10Value: number = year9Value + year9Value * interestRate;

// output
console.log("\n");
console.log("Year".padEnd(10) + "Initial Value".padEnd(25) + "Interest Gained".padEnd(25) + "Current Value");
console.log("--------------------------------------------------------------");

console.log(`${"1".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(initialValue * interestRate).toFixed(2).padEnd(24)}$${year1Value.toFixed(2)}`);
console.log(`${"2".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year1Value - initialValue).toFixed(2).padEnd(24)}$${year2Value.toFixed(2)}`);
console.log(`${"3".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year2Value - year1Value).toFixed(2).padEnd(24)}$${year3Value.toFixed(2)}`);
console.log(`${"4".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year3Value - year2Value).toFixed(2).padEnd(24)}$${year4Value.toFixed(2)}`);
console.log(`${"5".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year4Value - year3Value).toFixed(2).padEnd(24)}$${year5Value.toFixed(2)}`);
console.log(`${"6".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year5Value - year4Value).toFixed(2).padEnd(24)}$${year6Value.toFixed(2)}`);
console.log(`${"7".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year6Value - year5Value).toFixed(2).padEnd(24)}$${year7Value.toFixed(2)}`);
console.log(`${"8".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year7Value - year6Value).toFixed(2).padEnd(24)}$${year8Value.toFixed(2)}`);
console.log(`${"9".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year8Value - year7Value).toFixed(2).padEnd(24)}$${year9Value.toFixed(2)}`);
console.log(`${"10".padEnd(10)}$${initialValue.toFixed(2).padEnd(24)}$${(year9Value - year8Value).toFixed(2).padEnd(24)}$${year10Value.toFixed(2)}`);

console.log("\nDone.");
