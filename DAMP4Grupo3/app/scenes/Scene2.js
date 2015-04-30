alert('SceneScene2.js loaded');

function SceneScene2() {

};

SceneScene2.prototype.initialize = function () {
	alert("SceneScene2.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene2.prototype.handleShow = function (data) {
	alert("SceneScene2.handleShow()");
	// this function will be called when the scene manager show this scene
	// Moviendo el codigo, se carga cada vez que se cree la escena
	$.ajax({
		// La llamada sigue el mismo formato, para que devuelva la pelicula con id movie_id
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+'/movie/'+movie_id,
	  data: { api_key: api_key },
	  success: function(data){
		// Metemos los datos en cada campo
	  	$("#details").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
	  	$("#cover").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
	  	$("#titles").append('<h1>'+data.title+'</h1>');
	  	$("#titles").append('<h2>'+data.tagline+'</h2>');
	  	$("#sinopsis").append(data.overview);	  }
	});
};

SceneScene2.prototype.handleHide = function () {
	alert("SceneScene2.handleHide()");
	// this function will be called when the scene manager hide this scene
	// Hay que limpiar los datos para que luego pueda cargar
	$("#cover").html('');
	$("#titles").html('');
	$("#titles").html('');
	$("#sinopsis").html('');
	// > Se pùede poner tanto en el show() como en el focus()
	$("#infomando").html('');
};

SceneScene2.prototype.handleFocus = function () {
	alert("SceneScene2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene2.prototype.handleBlur = function () {
	alert("SceneScene2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene2.handleKeyDown(" + keyCode + ")");
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
