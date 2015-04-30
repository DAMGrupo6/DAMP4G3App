alert('SceneScenePeopleDet.js loaded');

function SceneScenePeopleDet() {

};

SceneScenePeopleDet.prototype.initialize = function () {
	alert("SceneScenePeopleDet.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScenePeopleDet.prototype.handleShow = function (data) {
	alert("SceneScenePeopleDet.handleShow()");
	// this function will be called when the scene manager show this scene
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+'/person/'+person_id,
	  data: { api_key: api_key },
	  success: function(data){
	  	$("#cover").append('<img src="'+base_url+'w185'+data.profile_path+'"/>');
	  	$("#titles").append('<h1>'+data.name+'</h1>');
	  	$("#titles").append('<h2>Born in: '+data.place_of_birth + ', '+data.birthday+'</h2>');
	  	$("#descripcion").append(data.biography);		 }
	});
};

SceneScenePeopleDet.prototype.handleHide = function () {
	alert("SceneScenePeopleDet.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#cover").html('');
	$("#titles").html('');
	$("#titles").html('');
	$("#descripcion").html('');
	$("#infomando").html('');
};

SceneScenePeopleDet.prototype.handleFocus = function () {
	alert("SceneScenePeopleDet.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScenePeopleDet.prototype.handleBlur = function () {
	alert("SceneScenePeopleDet.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScenePeopleDet.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScenePeopleDet.handleKeyDown(" + keyCode + ")");
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
