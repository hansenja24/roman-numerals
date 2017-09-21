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




//********************User Logic****************************
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = ($("input#input").val());
    var result = romanOne(input);
    $("#result").text(result);
  });
});
