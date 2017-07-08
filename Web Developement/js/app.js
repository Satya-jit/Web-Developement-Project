    "use strict"

    $(document).ready(function(){

var resultList = $("#resultList");
resultList.text("injected using jquery");
var toggleButton = $("#toggleButton");
toggleButton.on("click", function (){
	console.log("Button clicked");
	resultList.toggle(500);
	if(toggleButton.text() === "Hide" ) {
		toggleButton.text("show")

	} else {
		toggleButton.text("Hide");
	}
	
});

var results = [];


 function displayResults(results){
 	resultList.empty();
 

 


 $.each(results, function(i, item){
 	var newResult = $("<div class='result'>" +
 		"<div class='title'>" + item.title + "</div>" +
 		"<div>" + "Level : " + item.level + "</div>" +
 		"<div>" + "Total Score : " + item.total_score + "</div>" +
 		"<div>" + "Student : " + item.student + "</div>" +
 		"</div>");
 	resultList.append(newResult);
 	

 	newResult.hover(function (){
 		$(this).css("background-color", "Lightgray");
 		$(this).css("color", "darkblue");
 		$(this).css("border-color", "blue");
 	},
 		
 		function () {
 			
        $(this).css("background-color", "transparent");
        $(this).css("color", "black");
        $(this).css("border-color", "#999");
 		
 		}
 		) 



 	});
 }

$("#loginForm").on("submit", function () {
   var username = $("#username").val();
   var password = $("#password").val();

   if(username && password){
   	$.post("/api/login", {}, function(data) {
	console.log("Success :: " + data);
	displayResults(data);
  $("#loginForm").hide();
  $("#logoutSection").show();

	$("#errorMsg").empty();
})
 .fail(function(data){
 	$("#errorMsg").text("Username and password are mandatory.")

 })
 .done(function(){

 })
 

   }
   else {
   	$("#errorMsg").text("Username and password are mandatory.");
   }


	return false;
});
$("#logoutButton").on('click', function (){

$("#loginForm").show();
$("#logoutSection").hide();
resultList.empty();
resultList.text("please login to see all courses :) ")

})


    });

