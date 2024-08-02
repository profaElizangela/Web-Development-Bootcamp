// document.querySelector("h1");
// $("h1");


// document.querySelectorAll("button");
// $("button");

// $("h1").css("color", "red");
// $("h1").css("font-size", "5rem");
//---------------------------------------------------------
$("h1").addClass("big-title margin-50");

$("button:first").text("Don't Click Me");
$("button:last").text("Don't Click Me 2");


$("h1").html("<em>Hello!!</em>");

$("a").attr("href", "https://www.appbrewery.co/p/web-development-course-resources");

//---------------------------------------------------------

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

// for (var i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "black";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color", "black");
// });

//---------------------------------------------------------

// $("input").keydown(function(event){
//     $("h1").text(event.key);
// })

//---------------------------------------------------------

$("button").on("click", function(){
    $("h1").fadeToggle();
});