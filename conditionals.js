let employee ={
    firstName: "Libra",
    lastName: "Baino",
    numYearsService: 7,
    title: "Juniour Developer",
    department: "ICT",
    isActive: true,
    birthDate: new Date(Date.UTC(1990, 3, 6, 2, 3, 4, 0)),
}
console.log(employee)
console.log(JSON.stringify(employee))
console.log(JSON.stringify(employee, null, 2))
// continuation
let badgecolor;
if (employee.numYearsService <5){
    employee.badgecolor ="blue";
} else if (employee.numYearsService <10){
    employee.badgecolor ="yellow"
} else if (employee.numYearsService >=15){
    employee.badgecolor ="red"
} else {
    employee.badgecolor ="purple"
}
console.log(`numYearsService: ${employee.numYearsService} ,employee.badgecolor: ${employee.badgecolor}`)
// Envaluating multipe conditions for truthyness in all conditions
if (employee.numYearsService >5 && employee.department === "Engineering"){
    console.log("employee meets creteria")
} else if (employee.numYearsService >5 && employee.department === "Computing"){
    console.log("employee doesn't meet creteria")
} else {
    console.log("no department for employee mentioned")
}
// Envaluationg multiple conditions for truthyness in one or more conditions
if (employee.numYearsService >10 || employee.title.startsWith("J")){
    console.log("employee meets criteria")
} else {
    console.log("employee doesn't meet criteria")
}
// using the ternary operators
if (employee.numYearsService>10){
    console.log ("employee.annualBonus = 1000")
} else {
    console.log ("employee.annualBonus =500")
}
employee.annualBonus = (employee.numYearsService>10) ? 1000 : 500;
console.log(`${"employee.annualBonus"}, ${"employee.numYearsService"}`)