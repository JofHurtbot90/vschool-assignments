// function countCode(str) {
//   var count = 0;
//   for(var i = 0; i < str.length; i++) {
//     if(str.slice(i, i + 2) === 'co' && str.slice(i + 3, i + 4) === 'e') {
//       count++;
//     }
//   }
//
//   return count;
// }
//
// countCode("cozexxcopecopzcode");


function countCode(str) {
  return str.match(/co.e/g).length
}
countCode("cozexxcopecopzcode");
