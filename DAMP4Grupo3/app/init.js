//Variables de entorno
var API = 'http://api.themoviedb.org/3';
var api_key = 'fffcfc6228ea5f968c308ea249b5a9eb';
var session_id = '';
var base_url = 'http://image.tmdb.org/t/p/';
var movie_id = '';
var serie_id = '';
var person_id = '';
var search_value = '';

function onStart () {
	// TODO : Add your Initilize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	
	sf.scene.show('Scene1');
	sf.scene.focus('Scene1');
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to destroy your application here
	
}

alert("init.js loaded.");

/*
 * Keynav - jQuery Keyboard Navigation plugin
 *
 * Copyright (c) 2013 Nick Ostrovsky
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.firedev.com/jquery.keynav
 *
 * Version:  0.1
 *
 */

;(function($, window, document, undefined) {

	$.fn.keynav = function(checkNav) {
		var elements = this;
		var matrix;
		var x;
		var y;
		var current = this.filter('.selected');
		var keyNavigationDisabled=false;
		if (current.length == 0) current = this.first();

		current.addClass('selected');

		function update() {
			var i=0;
			var row = Array();
			var j = -1;
			var oldtop = false;
			var m=Array();

			elements.each(function(){
				if (!oldtop) oldtop = this.offsetTop;
				newtop=this.offsetTop;
				if (newtop != oldtop) {
					oldtop=newtop;
					m[i]=row;
					row = Array();
					i++;
					j=0;
					row[j]=this;
				} else {
					j++;
					row[j]=this;
				}
			});
			m[i]=row;
			matrix = m;
			coordinates=findCurrent();
			x=coordinates[0];
			y=coordinates[1];
			return matrix;
		}

		function findCurrent() {
			i=0; j=0; found = false;
			try {
				for (i=0; i<matrix.length; i++) {
					row=matrix[i];
					for (j=0; j<row.length; j++) {
						if (current[0] == row[j]) {
							throw([i,j]);
						}

					}
				}
			}
			catch (arr)
			{
				found = [i,j]
			}
			return(found);
		}

		function setCurrent(i,j) {
			if (i<0) i=(matrix.length-1);
			if (i>=matrix.length) i=0;
			if (j<0) j=(matrix[i].length-1);
			if (j>=matrix[i].length) j=0;
			current.removeClass('selected');
			current = $(matrix[i][j]);
			current.addClass('selected');
			x=i;
			y=j;
		}

		$(window).bind("resize", function(event) {
			update();
		});

		$(document).ready(function() {
			update();
		});


		SceneScene1.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene1.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.LEFT:
					setCurrent(x,y-1);
					break;
				case sf.key.RIGHT:
					setCurrent(x,y+1);
					break;
				case sf.key.UP:
					setCurrent(x-1,y);
					break;
				case sf.key.DOWN:
					setCurrent(x+1,y);
					break;
				case sf.key.ENTER:
					movie_id = current.attr('href');
					sf.scene.hide('Scene1');
					sf.scene.show('Scene2');
					sf.scene.focus('Scene2');
					break;
				case sf.key.TOOLS:
					event.preventDefault();
					sf.scene.hide('Scene1');
					sf.scene.show('SceneLogin');
					sf.scene.focus('SceneLogin');
					break;
				case sf.key.GREEN:
					movie_id = '';
					person_id = '';
					serie_id = '';
					sf.scene.hide('Scene1');
					sf.scene.show('SceneTV');
					sf.scene.focus('SceneTV');
					break;
				case sf.key.YELLOW:
					movie_id = '';
					person_id = '';
					serie_id = '';
					sf.scene.hide('Scene1');
					sf.scene.show('ScenePeople');
					sf.scene.focus('ScenePeople');
					break;
				case sf.key.BLUE:
					movie_id = '';
					person_id = '';
					serie_id = '';
					sf.scene.hide('Scene1');
					sf.scene.show('SceneSearch');
					sf.scene.focus('SceneSearch');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};

		SceneScene2.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene2.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					sf.scene.hide('Scene2');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};

		SceneSceneTV.prototype.handleKeyDown = function (keyCode) {
			alert("SceneSceneTV.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.LEFT:
					setCurrent(x,y-1);
					break;
				case sf.key.RIGHT:
					setCurrent(x,y+1);
					break;
				case sf.key.UP:
					setCurrent(x-1,y);
					break;
				case sf.key.DOWN:
					setCurrent(x+1,y);
					break;
				case sf.key.ENTER:
					serie_id = current.attr('href');
					sf.scene.hide('SceneTV');
					sf.scene.show('SceneTVDet');
					sf.scene.focus('SceneTVDet');
					break;
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('SceneTV');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.RED:
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('SceneTV');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.YELLOW:
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('SceneTV');
					sf.scene.show('ScenePeople');
					sf.scene.focus('ScenePeople');
					break;
				case sf.key.BLUE:
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('SceneTV');
					sf.scene.show('SceneSearch');
					sf.scene.focus('SceneSearch');
					break;
			default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneSceneTVDet.prototype.handleKeyDown = function (keyCode) {
			alert("SceneSceneTVDet.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					serie_id = '';
					sf.scene.hide('SceneTVDet');
					sf.scene.show('SceneTV');
					sf.scene.focus('SceneTV');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneScenePeople.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScenePeople.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.LEFT:
					setCurrent(x,y-1);
					break;
				case sf.key.RIGHT:
					setCurrent(x,y+1);
					break;
				case sf.key.UP:
					setCurrent(x-1,y);
					break;
				case sf.key.DOWN:
					setCurrent(x+1,y);
					break;
				case sf.key.ENTER:
					person_id = current.attr('href');
					sf.scene.hide('ScenePeople');
					sf.scene.show('ScenePeopleDet');
					sf.scene.focus('ScenePeopleDet');
					break;
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('ScenePeople');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.RED:
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('ScenePeople');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.GREEN:
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('ScenePeople');
					sf.scene.show('SceneTV');
					sf.scene.focus('SceneTV');
					break;
				case sf.key.BLUE:
					movie_id = '';
					serie_id = '';
					person_id = '';
					sf.scene.hide('ScenePeople');
					sf.scene.show('SceneSearch');
					sf.scene.focus('SceneSearch');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneScenePeopleDet.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScenePeopleDet.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					person_id = '';
					sf.scene.hide('ScenePeopleDet');
					sf.scene.show('ScenePeople');
					sf.scene.focus('ScenePeople');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneSceneLogin.prototype.handleKeyDown = function (keyCode) {
			alert("SceneSceneLogin.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					person_id = '';
					serie_id = '';
					sf.scene.hide('SceneLogin');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneSceneSearch.prototype.handleKeyDown = function (keyCode) {
			alert("SceneSceneSearch.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focused
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					sf.scene.hide('SceneSearch');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.RED:
					sf.scene.hide('SceneSearch');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.GREEN:
					sf.scene.hide('SceneSearch');
					sf.scene.show('SceneTV');
					sf.scene.focus('SceneTV');
					break;
				case sf.key.YELLOW:
					sf.scene.hide('SceneSearch');
					sf.scene.show('ScenePeople');
					sf.scene.focus('ScenePeople');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
			
		return this;
	};

})(jQuery, window, document);
