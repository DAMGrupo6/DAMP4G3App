alert('SceneScene1.js loaded');

function SceneScene1() {

};

// Arranca cuando se carga la escena
SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	alert(api_key);
	alert(API+"/discover/movie?api_key="+api_key);
	
		$.ajax({
		  type: "GET",
		  // Se colocan a true por si puede fallar
		  crossDomain: true,
		  async: true,
		  // Tipo de dato
		  dataType: "json",
		  //URL a llamar (viene en la API)
		  url: API+"/discover/movie?api_key="+api_key,
		  //Añadir datos: url: API+"/discover/movie?api_key="+api_key+"&otroparametro"=otrovalor
		  success: function(data){
			//Asi devuelve los datos que da el servidor
			//alert(data);
		  	alert('success');
		  	// Recorremos el array que devuelve (aqui solo 12)
		  	for (var i = 11; i >= 0; i--) {
		  		// Si es la primera, añadimos una fila
		  		if(i == 11) $("#movies").append('<div class="row">');
		  		// Si es la sexta, cerramos la primera y añadimos la segunda fila
		  		if(i == 5) $("#movies").append('</div><div class="row">');
		  		// Si es la ultima, cerramos
		  		if(i == 0) $("#movies").append('</div>');
		  		// Dentro incluimos los resultados, en columnas (con la URL, tamaño de la imagen, y el resultado)
		  		//$("#movies").append('<div class="col-xs-2" href="details.html#'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		// Para añadir un id, es con ("#movies"), para que lo meta en el div con id=movies
		  	}
		  	$('#movies div.col-xs-2').keynav();
		  },
		  error: function(){
			//Asi devuelve el error que da el servidor
			alert(error);
		  	//alert('error');
		  }
		});

};

//Arranca cuando se inicia la escena
SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene1.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene1.handleKeyDown(" + keyCode + ")");
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
