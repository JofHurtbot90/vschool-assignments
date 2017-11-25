var ipAddress = function(str) {

var arrOfNum = str.split('.');
// if (arrOfNum[0] >= 0 && arrOfNum[0] <= 255 &&
//     arrOfNum[1] >= 0 && arrOfNum[1] <= 255 &&
//     arrOfNum[2] >= 0 && arrOfNum[2] <= 255 &&
//     arrOfNum[3] >= 0 && arrOfNum[3] <= 255) {
//       return true;
//     } else {
//       return false;
//     }
// }
for(var i = 0; i < arrOfNum.length; i++) {
  if((arrOfNum[i] >= 0 && arrOfNum[i] <= 255) && typeof arrOfNum[i] === 'number') {
    total++;
  }
}

return total === 4;
module.exports = ipAddress;
