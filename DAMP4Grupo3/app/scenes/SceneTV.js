alert('SceneSceneTV.js loaded');

function SceneSceneTV() {

};

SceneSceneTV.prototype.initialize = function () {
	alert("SceneSceneTV.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);

	alert(API+"/discover/tv?api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/discover/tv?api_key="+api_key,
	  success: function(data){
	  	alert('success');
	  	for (var i = 11; i >= 0; i--) {
	  		if(i == 11) $("#tv").append('<div class="row">');
	  		if(i == 5) $("#tv").append('</div><div class="row">');
	  		if(i == 0) $("#tv").append('</div>');
	  		$("#tv").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  	}
	  	$('#tv div.col-xs-2').keynav();
	  },
	  error: function(){
	  	alert('error');
	  }
	});

};

SceneSceneTV.prototype.handleShow = function (data) {
	alert("SceneSceneTV.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneTV.prototype.handleHide = function () {
	alert("SceneSceneTV.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneTV.prototype.handleFocus = function () {
	alert("SceneSceneTV.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneTV.prototype.handleBlur = function () {
	alert("SceneSceneTV.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};




