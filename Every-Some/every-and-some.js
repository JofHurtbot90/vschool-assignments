function some(arr, callBack){
  for (let i = 0; i < arr.length; i++){
    if (callBack(arr[i])){
      return true
    };
  };
  return false;
}


console.log(some([1, 2, 3], theSingleNumber=>theSingleNumber === '1'));
