$(function(){
  var arrays = [];
  $("#submit").click(function(){
    var groceries = $("input#groceries").val();
    arrays.push(groceries);

     $("#items").prepend('<li>' + groceries + '</li>');

  });
  $("#submit1").click(function(){
    var sortedGroceries = arrays.sort();
    var upperCase=sortedGroceries.map(function(grocery) {
      return grocery.toUpperCase();
    });
    upperCase.forEach(function(grocery){
      $("#final").append('<li>' + grocery + '</li>');

    $("#formOne").hide();
    $("#items").hide();

    $("#final").show();
    });
  });


});


// $(function(){
//   var flavors = ["vanilla", "choco", "mint", "cookie", "strawberry"]
//     flavors.forEach(function(flavor) {
//       $("#fav-flavor").prepend('<li>' + flavor + '</li>');
//     });
//   });
