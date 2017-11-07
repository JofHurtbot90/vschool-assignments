function noDupes() {
  var input = 'Mississippi';
  var result = '';
  for(var i = 0; i < input.length; i++){
    if(result.indexOf(input[i]) < 0) {
      result += input[i];
    }
  }
return result;
}

console.log(noDupes('Mississippi'));
