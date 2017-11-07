var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

  vegetables.pop();
  fruit.shift();
var orangeIndex = fruit.indexOf("orange");
  fruit.push(orangeIndex);
var vegLength = vegetables.length
  vegetables.push(vegLength);
var food = fruit.concat(vegetables);
console.log(food)

var removedItem = food.splice(4, 2);
var reverseArray = food.reverse();
var returnedJoin = food.join();





console.log("fruit: ", fruit);
console.log("vegetables.: ", vegetables.length);
console.log(reverseArray);
console.log(returnedJoin);
