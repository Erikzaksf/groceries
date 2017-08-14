$(document).ready(function(){
  $(".form").submit(function(e){
    var userInput;
    var items = ["one", "two", "three"];
    e.preventDefault();

    var newArray = items.map(function(item){
      userInput = $("input#" + item).val();
      return userInput.toUpperCase();
    });
    $(".form").hide();
    console.log(newArray.sort());
    $('.output').text('Here is your list ' + newArray[0] + ', ' + newArray[1] + ', and ' + newArray[2]);
  });

});
