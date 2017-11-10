// function matching(str) {
//   const newArr = str.split(" ");
//   let temp;
//   const repeated = [];
//   for(let i = 0; i < newArr.length; i++) {
//     temp = newArr[i];
//     for(let j = i; j < newArr.length; j++) {
//       if(repeated.includes(temp)) {
//         break;
//       }
//       if(temp === newArr[j + 1]) {
//         repeated.push(temp);
//       }
//     }
//   }
//   return repeated;\
// }

const matching = str => {
  const codeArr = str.replace('/\W/g', ' ').toLowerCase().split(' ').sort();
  const double = codeArr.filter(item,index) => codeArr[index] === codeArr[index + 1]);
  return double.filter((item, index) => double[index] !== double[index + 1])

}



module.exports = matching;
