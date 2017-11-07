var ask = require("readline-sync");
var employees = []
function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
          console.log("Name:" + " " + name);
          console.log("Job Title:" + " " + jobTitle);
          console.log("Salary: " + "$" + salary);
          console.log("Status: " + this.status)
    }
}
var finch = new Employee("Finch", "Engineer", 85000);
var krane = new Employee("Krane", "Marketer", 120000)
var porter= new Employee("Porter", "Entrepreneur", 55000)
porter.status = "Contract";

finch.printEmployeeForm();
console.log(" ");
krane.printEmployeeForm();
console.log(" ");
porter.printEmployeeForm();
console.log(" ");
employees.push(finch, krane, porter);
console.log(employees);
