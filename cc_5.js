// Employee Array

let employees = [
    {
        name: "John",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Sarah",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Mike",
        hourlyRate: 18,
        hoursWorked: 50
    }
];

// Calculate Base Pay (up to 40 hours)

function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

// Calculate Overtime Pay

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * rate * 1.5;
    }
    return 0;
}

// Calculate Taxes (15%)

function calculateTaxes(grossPay) {
    return grossPay * 0.85;
}

// Process Payroll

function processPayroll(employee) {

    let basePay = calculateBasePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    let overtimePay = calculateOvertimePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    let grossPay = basePay + overtimePay;

    let netPay = calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

// Loop Through Employees

for (let employee of employees) {
    console.log(processPayroll(employee));
}
// Overtime is paid at 1.5 times the hourly rate
function calculateOvertimePay(rate, hours) {
