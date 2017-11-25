var withoutEnd2 = function(str){
  // str = str.split('');
  // str = str.pop();
  // str = str.shift();
  //
  // return str.join('');

  return str.slice(1, -1);
}

withoutEnd2('test');
module.exports = withoutEnd2;
