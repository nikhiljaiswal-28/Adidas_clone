$(document).ready(function(){

let cartCount=0;

$(".add-cart").click(function(){

cartCount++;

$("#cartCount").text(cartCount);

alert("Item Added Successfully!");

$(this).text("Added ✓");

$(this).removeClass("btn-dark");

$(this).addClass("btn-success");

});

});