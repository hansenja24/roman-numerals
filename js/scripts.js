//********************Business Logic************************

var valueFifth = ["V","L","D"];
var valueSingle  = ["I","X","C","M"];


var roman = function(number) {
  var value = [];
  var mix = "";
  debugger;
  for(i = 0; i < length; i++){
    if(number[i] >= 5 && number[i] < 9){
      mix = (valueFifth[i]);
      number[i] = number[i] - 5;
      if(number[i] > 0) {
        for(j = 0; j < number[i]; j++) {
          mix += (valueSingle[i]);
        }
      }
    }
    else if(number[i] < 4) {
      for(j = 0; j < number[i]; j++) {
        mix = (valueSingle[i]);
      }
    }
    else if(number[i] == 4){
      mix = (valueSingle[i] + valueFifth[i]);
    }
    else if(number[i] == 9){
      mix = (valueSingle[i] + valueSingle[i+1]);
    }
    value.push(mix);
  }
  return value;
}


// var romanTwo = function(number) {
//
//   var value = "";
//   if(number >= 5 && number < 9){
//     value += "L"
//     number = number - 5;
//     if(number > 0) {
//       for(i = 0; i < number; i++) {
//         value += "X";
//     }
//   }
// }
//   else if(number < 4) {
//     for(i = 0; i < number; i++) {
//       value += "X";
//     }
//
//   }
//   else if(number == 4){
//     value = "XL";
//   }
//   else if(number == 9){
//     value = "XC";
//   }
//   return value;
// }
//
// var romanThree = function(number) {
//     debugger;
//   var value = "";
//   if(number >= 5 && number < 9){
//     value += "D"
//     number = number - 5;
//     if(number > 0) {
//       for(i = 0; i < number; i++) {
//         value += "C";
//     }
//   }
// }
//   else if(number < 4) {
//     for(i = 0; i < number; i++) {
//       value += "C";
//     }
//
//   }
//   else if(number == 4){
//     value = "CD";
//   }
//   else if(number == 9){
//     value = "CM";
//   }
//   return value;
// }
//
// var romanFour = function(number) {
//   var value = "";
//
//   if(number < 4) {
//     for(i = 0; i < number; i++) {
//       value += "M";
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
    var splitInputs = [];
    var result = "";
    digits.forEach(function(digit) {
      splitInputs.push(digit);
    });

    splitInputs.reverse();
    length = splitInputs.length;

    if(splitInputs[3] >= 4){  //puts or put?????????
      alert("Please enter a number less than 4,000");
    } else {
      // var result = romanFour(splitInput[3]) + romanThree(splitInput[2]) + romanTwo(splitInput[1]) + romanOne(splitInput[0]);
        result = roman(splitInputs); //put or puts?????????
      };
      result.reverse();
      result = result.join('');


    $("#result").text(result);
  });
});
