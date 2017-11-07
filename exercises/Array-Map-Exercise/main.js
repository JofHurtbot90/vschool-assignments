function readyToPutInTheDOM(people){
    return people.map(function(person){
        return `<h1>${person.name.split(" ")[0]}<h1><h2>${person.age}</h2>`
    })
};

console.log(readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
])
);





// function doubleNumbers(arr) {
//   return arr.map(function(arr) {
//     return arr * 2;
// });
// };
// console.log(doubleNumbers([2, 5, 100]));


// function stringItUp(arr) {
//   return arr.map(function(arr) {
//     return ['arr'];
//   });
// };
// console.log(stringItUp([2, 5, 100]));



// function namesOnly(arr){
//   return arr.map(function(arr){
//     return arr.name;
//   })
// }
//
//
// console.log(namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]));


function thereIsNoSpoon(arr) {
  return arr.map(function(arr) {
    if(arr >= 18)
      return name `can go to The Matrix`{

      }else {
        return name `is under age!!`
      }

  });
};


console.log(nameOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
])
);
