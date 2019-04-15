$("div").hide();
$("div").toggle(2000);

$("#box1").on("click", function(){
$("#box1").addClass("red");
});
$("#box2").on("click", function(){
$("#box2").addClass("blue");
});

$("#box3").on("click", () =>{
$("#box3").addClass("green");
});

$("#box4").on("click", function(){
$("#box4").addClass("yellow");
});

$("#appear").on("click", function(){
  $("body").prepend("<p>Pink</p>");
  $("#appear").addClass("pinkbutton");
});

$("#disappear").on("click", function(){
  $("body").prepend("<div class = 'newbox'></div>")

})
