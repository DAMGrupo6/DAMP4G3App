alert('SceneSceneTVDet.js loaded');

function SceneSceneTVDet() {

};

SceneSceneTVDet.prototype.initialize = function () {
	alert("SceneSceneTVDet.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneTVDet.prototype.handleShow = function (data) {
	alert("SceneSceneTVDet.handleShow()");
	// this function will be called when the scene manager show this scene
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+'/tv/'+serie_id,
	  data: { api_key: api_key },
	  success: function(data){
	  	$("#details").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
	  	$("#cover").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
	  	$("#titles").append('<h1>'+data.name+'</h1>');
	  	$("#titles").append('<h2> Air date: '+data.first_air_date+'</h2>');
	  	$("#descripcion").append(data.overview);}
	});
};

SceneSceneTVDet.prototype.handleHide = function () {
	alert("SceneSceneTVDet.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#cover").html('');
	$("#titles").html('');
	$("#titles").html('');
	$("#descripcion").html('');
	$("#infomando").html('');
};

SceneSceneTVDet.prototype.handleFocus = function () {
	alert("SceneSceneTVDet.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneTVDet.prototype.handleBlur = function () {
	alert("SceneSceneTVDet.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneTVDet.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneTVDet.handleKeyDown(" + keyCode + ")");
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