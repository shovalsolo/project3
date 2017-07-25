
// $('#dropDown').change(function() {      
//     $("#dropDown option selected").val();  
// });

function apiget(result){
	var choice = $('#dropDown').val();
	var url = "https://api.nytimes.com/svc/topstories/v2/"+choice+".json";
	url += '?' + $.param({
	  'api-key': "bc26c8e91bf445e388e87441a3b3219d"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	 
// remove any div with class of article
	  $( ".article" ).remove();

//target the header resize the icon and move the selector with a new class and add on done
//like $("header").addClass("minifed");
/*
first{
	flex:col
	width:20%;
	j-c:cen;
	a-i:cen;
}
&minifed{
	width:10%;
}

*/


	  var res = result.results;
	  var count = 1;

	  for(i=0; i< res.length;i++){

		if (count<=12) {

		  	if (res[i].multimedia.length>0) {

			  //var para = $("<div class='article'><p class='title'>"+res[i].title+"</p>"+"<a href="+res[i].url+">"+"<img src="+res[i].multimedia[0].url+">"+"</a>"+"<br>"+"<p class='abstract'>"+res[i].abstract+"</p>"+"</div>");

			  //var para = $("<div class='article'><p class='title'>"+res[i].title+"</p>"+$(".article").css("background", "url("+res[i].multimedia[0].url+")", "background-repeat": "no-repeat")+"<br>"+"<p class='abstract'>"+res[i].abstract+"</p>"+"</div>");

			  //var para = $("<div class='article'><p class='title'>"+res[i].title+"</p>"+$(".article").css("background", "url("+res[i].multimedia[0].url+")")+"<br>"+"<p class='abstract'>"+res[i].abstract+"</p>"+"</div>");
			  //$("#artRes").append(para);
			  
			  var artAbs = res[i].abstract;
			  var artImg = res[i].multimedia[4].url;
			  var artLink = res[i].url;

			  var newElement = document.createElement("div");
			  
			  $(newElement).css("background", "url("+artImg+")");
			  //$(newElement).append(artAbs);

			  $(newElement).append("<a class='artLink font-open-sans-lig' href="+artLink+">"+artAbs+"</a>");
			  $(newElement).addClass("dt-art tab-art article min-height flex flex-ali-end");
			  $(".artRes").append(newElement);
			  count++;

		  }
		}else{
			break;
		}

	}

	}).fail(function(err) {
	  throw err;
	});
	

}
