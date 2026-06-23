$(document).ready(function(){

var cartCount = 0;

$(".add-cart").click(function(){

    cartCount = cartCount + 1;

    $("#cartCount").text(cartCount);

    alert("Item Added Successfully!");

    $(this).text("Added");

});

});
