// Author: William Provost
// Version: 1.0.0
// Date: 2025-11-11
// Fileoverview: This program asks the user for an initial deposit amount and an annual interest rate,
// then displays a 10-year table showing the balance growth each year without using loops.

package main

import "fmt"

func main() {
	// CONSTANTS
	//const YEARS int = 10 --> total number of years to calculate, although dont need it as it causes error in program

	// VARIABLES
	var initialValue float64
	var interestRate float64
	var year1Value, year2Value, year3Value, year4Value, year5Value float64
	var year6Value, year7Value, year8Value, year9Value, year10Value float64
	var year1Interest, year2Interest, year3Interest, year4Interest, year5Interest float64
	var year6Interest, year7Interest, year8Interest, year9Interest, year10Interest float64

	// INPUT
	fmt.Print("Enter the initial deposit amount: $")
	fmt.Scanln(&initialValue)

	fmt.Print("Enter the annual interest rate (as a percent, e.g. 7 for 7%): ")
	fmt.Scanln(&interestRate)

	// Convert percentage to decimal
	interestRate = interestRate / 100

	// PROCESS
	// Calculate interest and total for each year (no loop)
	year1Interest = initialValue * interestRate
	year1Value = initialValue + year1Interest

	year2Interest = year1Value * interestRate
	year2Value = year1Value + year2Interest

	year3Interest = year2Value * interestRate
	year3Value = year2Value + year3Interest

	year4Interest = year3Value * interestRate
	year4Value = year3Value + year4Interest

	year5Interest = year4Value * interestRate
	year5Value = year4Value + year5Interest

	year6Interest = year5Value * interestRate
	year6Value = year5Value + year6Interest

	year7Interest = year6Value * interestRate
	year7Value = year6Value + year7Interest

	year8Interest = year7Value * interestRate
	year8Value = year7Value + year8Interest

	year9Interest = year8Value * interestRate
	year9Value = year8Value + year9Interest

	year10Interest = year9Value * interestRate
	year10Value = year9Value + year10Interest

	// OUTPUT
	fmt.Println()
	fmt.Printf("%-5s %-20s %-20s %-20s\n", "Year", "Initial Value ($)", "Interest Gained ($)", "Current Value ($)")
	fmt.Println("---------------------------------------------------------------")

	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 1, initialValue, year1Interest, year1Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 2, initialValue, year2Interest, year2Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 3, initialValue, year3Interest, year3Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 4, initialValue, year4Interest, year4Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 5, initialValue, year5Interest, year5Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 6, initialValue, year6Interest, year6Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 7, initialValue, year7Interest, year7Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 8, initialValue, year8Interest, year8Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 9, initialValue, year9Interest, year9Value)
	fmt.Printf("%-5d %-20.2f %-20.2f %-20.2f\n", 10, initialValue, year10Interest, year10Value)

	fmt.Println("\nDone.")
}


