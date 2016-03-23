window.onload = function() { 
	var clickCount = 0;
	

	createGrid();	
	fillGrid();

	/*
	var BOX1 = document.getElementsByClassName('box')[0];
	BOX1.addEventListener('click', function(){ 
		clickCount++;
		
		if(clickCount%2 == 0) { 
			BOX1.classList.remove("red");
		} else { 
			BOX1.classList.add("red");
		}

	})
	*/

	var play = function() { 

		//var grid = document.getElementById('grid');
		var direction = 0; 
		
    	document.onkeydown = function(e) {
    		//e = e || window.event;
    		//switch(e.which || e.keyCode) {		
		        if(e.keyCode == 37) { //left
		        	direction = -1;
		        } else if(e.keyCode == 38) { //up
		        	direction = 4;
		        } else if(e.keyCode == 39) { //right
		        	direction = 1;
		        } else if(e.keyCode == 40) { //down
		        	direction = -4;
		        } else { 
		        	return;
		        }

		        /*
		        case 37: // left
		        	direction = -1
		        break;

		        case 38: // up
		        	direction = 4
		        break;

		        case 39: // right
		        	direction = 1
		        break;

		        case 40: // down
		        	direction = -4
		        break;

		        default: return; // exit this handler for other keys */
		    
		    e.preventDefault(); // prevent the default action (scroll / move caret)
		    userPlay(direction);
		};
		

	}
}

var userPlay = function(direction) { 

	for(var i = 0; i < 15; i++) { 
		
		if(i+direction >= 16 || i+direction <= 0) { 
			return;
		} else { 
			var BOX = document.getElementsByClassName('box')[i];
			var currentClassList = BOX.className.split(" ");
			var changeBOX = document.getElementsByClassName('box')[i+direction];
			var changeBOXList = changeBOX.className.split(" ");

			if(currentClassList.length >= 2 && changeBOXList.length <= 1) { 

					var color = currentClassList[1];
					changeBOX.classList.add(color);
					BOX.classList.remove(color);
					i++;
			}

		}


			

	}
}









var allRed = function() { 
	for(var i = 0; i < 15; i++) { 
		var BOX = document.getElementsByClassName('box')[i]; 
		BOX.classList.add('red');
	}
}	









