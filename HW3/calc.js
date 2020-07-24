/*
 * Implement all your JavaScript in this file!
 */

var tempFirst = ""; //hold the first number in teppFirst
var tempLast = ""; //hold the latest number in tempLast
var tempOp = ""; //hold the latest operator
var clearDisplay = false; //check whether display should be cleared or not(default not)

function solve() {
  //Speial case: divide by 0
  if (($('#display').val() == 0) && (/\//.test(tempOp))){
    $('#display').val("Infinity");
    clearDisplay = true;
  }
  else {
    tempLast = $('#display').val();
    $('#display').val(eval(tempFirst + tempOp + $('#display').val()));
    clearDisplay = true;
  }
}

//handle number button clicks
$('.numButton').click(function() {
  if (clearDisplay) {
    $('#display').val("");
    clearDisplay = false;
  }
  //add clicked number to display
  $('#display').val($('#display').val() + $(this).val());
    
});

//handle operator clicks
//+
$('#addButton').click(function() {
    if (tempFirst == "" || clearDisplay || tempLast !== "") {
      tempFirst = $('#display').val();
      tempOp = " + ";
      clearDisplay = true;
    } else {
      solve();
      tempFirst = $('#display').val();
      tempOp = " + ";
    }
});

//-
$('#subtractButton').click(function() {
  if (tempFirst == "" || clearDisplay || tempLast !== "") {
    tempFirst = $('#display').val();
    tempOp = " - ";
    clearDisplay = true;
  } else {
    solve();
    tempFirst = $('#display').val();
    tempOp = " - ";
      }
});

//*
$('#multiplyButton').click(function() {
  if (tempFirst == "" || clearDisplay || tempLast !== "") {
    tempFirst = $('#display').val();
    tempOp = " * ";
    clearDisplay = true;
  } else {
    solve();
    tempFirst = $('#display').val();
    tempOp = " * ";
  }
});

///
$('#divideButton').click(function() {
  if (tempFirst == "" || clearDisplay || tempLast !== "") {
    tempFirst = $('#display').val();
    tempOp = " / ";
    clearDisplay = true;
  } else {
    solve();
    tempFirst = $('#display').val();
    tempOp = " / ";
  }
});

//=
$('#equalsButton').click(function() {
  //repeat operation if double equals
  if (clearDisplay) {
    if (tempLast !== "" && tempFirst !== ""){
      $('#display').val( eval($('#display').val() + tempOp + tempLast) );
    }
    return;
  } else {
      solve();
    }
});

//C
$('#clearButton').click(function() {
  tempFirst = "";
  tempLast = "";
  tempOp = "";
  clearDisplay = false;
  $('#display').val("");
});