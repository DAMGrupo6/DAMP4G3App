alert('SceneSceneSearch.js loaded');

function SceneSceneSearch() {

};

SceneSceneSearch.prototype.initialize = function () {
	alert("SceneSceneSearch.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	search_value='';
	$('#search').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
		    if (text) {
		    	search_value = text;
		    	alert(search_value);
				alert(API+"/search/keyword?api_key="+api_key+"&query="+search_value);
				
				$.ajax({
					  type: "GET",
					  crossDomain: true,
					  async: true,
					  dataType: "json",
					  url: API+"/search/multi?api_key="+api_key+"&query="+search_value,
					  success: function(data){
							alert('success');
							alert(data);
						  	// Recorremos el array que devuelve (aqui hasta 4)
							var i = 0;
							var total = data.total_results;
							
							if (total > 6) total = 6;
							if (total == 0) {
								$("#searchresults").append('<div class="row"><center><h1>No results found</h1></center></div>');
							} else {
								while ( i < total ) {
									// Si es la primera, añadimos una fila
									if (i == 0)				$("#searchresults").append('<div class="row">');
									if (i == (total - 1))	$("#searchresults").append('</div>');
									var mediaType=data.results[i].media_type;
									if(mediaType=='tv'){
										$("#searchresults").append('<div class="col-xs-2"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
										//$("#searchresults").append('<div class="col-xs-2"><h1>'+ data.results[i].original_name +'</h1><h2>'+mediaType+'</h2></div>');	
									}
										
									if(mediaType == 'movie'){
										$("#searchresults").append('<div class="col-xs-2"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
										//$("#searchresults").append('<div class="col-xs-2"><h1>'+ data.results[i].original_title +'</h1><h2>'+mediaType+'</h2></div>');
									}
									
									if(mediaType == 'person'){
										$("#searchresults").append('<div class="col-xs-2"><img src="'+base_url+'w342'+data.results[i].profile_path+'"/></div>');
										//$("#searchresults").append('<div class="col-xs-2"><h1>'+ data.results[i].name +'</h1><h2>'+mediaType+'</h2></div>');
										
									}
									
									//$("#searchresults").append('<div class="col-xs-2"><h1> ID: '+ data.results[i].id +' </h1><h2>'+ data.results[i].original_title +'</h2></div>');									
									i++;
								}
							}
						  	$('#searchresults div.col-xs-2').keynav();
						  },
						  error: function(){
							alert(error);
						  }
		    	});
		    }
		}}
	);
};

SceneSceneSearch.prototype.handleShow = function (data) {
	alert("SceneSceneSearch.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneSearch.prototype.handleHide = function () {
	alert("SceneSceneSearch.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#searchresults").html('');
	$("#searchresults").append('<br><br><br><br><br><br>');
	search_value='';
};

SceneSceneSearch.prototype.handleFocus = function () {
	alert("SceneSceneSearch.handleFocus()");
	$('#search').sfTextInput('blur');
	$('#search').sfTextInput('focus');
	// this function will be called when the scene manager focus this scene
};

SceneSceneSearch.prototype.handleBlur = function () {
	alert("SceneSceneSearch.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneSearch.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneSearch.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
