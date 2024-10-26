function count() { 
  counter = counter + 1;
  $("#number").text(counter);
} 

var counter = 0;

// this code is run when DOM is loaded
$(document).ready(function (){
  $('#number').click()
});
