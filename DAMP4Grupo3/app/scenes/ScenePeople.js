alert('SceneScenePeople.js loaded');

function SceneScenePeople() {

};

SceneScenePeople.prototype.initialize = function () {
	alert("SceneScenePeople.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);

	alert(API+"/person/popular?api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/person/popular?api_key="+api_key,
	  success: function(data){
	  	alert('success');
	  	for (var i = 11; i >= 0; i--) {
	  		if(i == 11) $("#people").append('<div class="row">');
	  		if(i == 5) $("#people").append('</div><div class="row">');
	  		if(i == 0) $("#people").append('</div>');
	  		$("#people").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].profile_path+'"/></div>');
	  	}
	  	$('#people div.col-xs-2').keynav();
	  },
	  error: function(){
	  	alert(error);
	  }
	});

};

SceneScenePeople.prototype.handleShow = function (data) {
	alert("SceneScenePeople.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScenePeople.prototype.handleHide = function () {
	alert("SceneScenePeople.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScenePeople.prototype.handleFocus = function () {
	alert("SceneScenePeople.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScenePeople.prototype.handleBlur = function () {
	alert("SceneScenePeople.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

