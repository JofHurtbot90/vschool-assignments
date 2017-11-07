document.getElementById("add-number").addEventListener("click", function(){
  var numberOne = Number(document.getElementById("number-one").value)
  var numberTwo = parseInt(document.getElementById("number-two").value)

  document.getElementById("add-result").innerText = numberOne + numberTwo;


document.getElementById("subtract-number").addEventListener("click", function(){
    var numberThree = Number(document.getElementById("number-three").value)
    var numberFour = parseInt(document.getElementById("number-four").value)

    document.getElementById("sub-result").innerText = numberThree - numberFour;


document.getElementById("multiply-number").addEventListener("click", function(){
      var numberFive = Number(document.getElementById("number-five").value)
      var numberSix = parseInt(document.getElementById("number-six").value)

      document.getElementById("multiply-result").innerText = numberFive * numberSix;

    })

  })

})
