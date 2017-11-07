document.getElementById("button").addEventListener("click", function(){
      var numberOne = Number(document.getElementById("Baddie caught").value)
      var numberTwo = parseInt(document.getElementById("price").value)

      document.getElementById("multiply-result").innerText = numberOne * numberTwo;

  });
