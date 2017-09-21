//********************Business Logic************************
var romanOne = function(number) {
  var value = "";
  if(number >= 5){
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
  return value;
}

var romanTwo = function(number) {
  var value = "";
  if(number >= 5){
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
  return value;
}

var romanThree = function(number) {
  var value = "";
  if(number >= 5){
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
  return value;
}

// var romanFour = function(number) {
//   var value = "";
//   if(number >= 5){
//     value += "V"
//     number = number - 5;
//     if(number > 0) {
//       for(i = 0; i < number; i++) {
//         value += "I";
//     }
//   }
// }
//   else if(number < 4) {
//     for(i = 0; i < number; i++) {
//       value += "I";
//     }
//
//   }
//   return value;
// }



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

    var result = romanThree(splitInput[2]) + romanTwo(splitInput[1]) + romanOne(splitInput[0]);
    // for(i = 0; i < splitInput.length; i++){
    //   var result = romanOne(splitInput[i]);
    // }
    // var result = romanOne(splitI);
    $("#result").text(result);
  });
});
