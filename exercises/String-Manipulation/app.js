var readlineSync = require("readline-sync");
var input1 = 'hello';
  console.log(input1.toUpperCase());

  var name = readlineSync.question('What is your name?');
  console.log('Hello ' + name + ' nice to meet you!');


  var len = name.length;
  var noOfChars = readlineSync.question("You have " + len + " character's in your name");
  console.log("You have " + len + " character's in your name");
var inputStr1 = 'a short name';
var inputStr2 = ' you have.';
console.log(inputStr1.concat('' + inputStr2));

var inputMsg = 'Watch Blade Runner 2049 you must.'
var input3 = inputMsg.slice(inputMsg.length/2);
var input4 = inputMsg.indexOf(0);

console.log(inputMsg);
console.log(input4);
