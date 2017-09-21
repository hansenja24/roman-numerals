//********************Business Logic************************

var romanOne = function(number) {

  var value = "";
  if(number >= 5 && number < 9){
    value += "V"
    number = number - 5;
    if(number > 0) {
      for(i = 0; i < number; i++) {
        value += "I";
    }
  }
}
  else if(number < 4) {
    for(i = 0; i < number; i++) {
      value += "I";
    }
  }
  else if(number == 4){
    value = "IV";
  }
  else if(number == 9){
    value = "IX";
  }
  return value;
}

var romanTwo = function(number) {

  var value = "";
  if(number >= 5 && number < 9){
    value += "L"
    number = number - 5;
    if(number > 0) {
      for(i = 0; i < number; i++) {
        value += "X";
    }
  }
}
  else if(number < 4) {
    for(i = 0; i < number; i++) {
      value += "X";
    }

  }
  else if(number == 4){
    value = "XL";
  }
  else if(number == 9){
    value = "XC";
  }
  return value;
}

var romanThree = function(number) {
    debugger;
  var value = "";
  if(number >= 5 && number < 9){
    value += "D"
    number = number - 5;
    if(number > 0) {
      for(i = 0; i < number; i++) {
        value += "C";
    }
  }
}
  else if(number < 4) {
    for(i = 0; i < number; i++) {
      value += "C";
    }

  }
  else if(number == 4){
    value = "CD";
  }
  else if(number == 9){
    value = "CM";
  }
  return value;
}

var romanFour = function(number) {
  var value = "";

  if(number < 4) {
    for(i = 0; i < number; i++) {
      value += "M";
    }

  }
  return value;
}



//********************User Logic****************************
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var input = $("input#input").val();
    var digits = input.split("");
    var splitInput = [];
    digits.forEach(function(digit) {
      splitInput.push(digit);
    });

    splitInput.reverse();

    if(splitInput[3] >= 4){
      alert("Please enter a number less than 4,000");
    } else {
      var result = romanFour(splitInput[3]) + romanThree(splitInput[2]) + romanTwo(splitInput[1]) + romanOne(splitInput[0]);
    }

    // for(i = 0; i < splitInput.length; i++){
    //   var result = romanOne(splitInput[i]);
    // }
    // var result = romanOne(splitI);
    $("#result").text(result);
  });
});
