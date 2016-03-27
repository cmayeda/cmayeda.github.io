window.onload = function() { 
	
	createGrid();	
	fillGrid();

	var direction = null; 
		
    document.onkeydown = checkKey; 

    function checkKey(e) { 
		e = e || window.event;
    		
		if(e.keyCode == 37) { //left
		    direction = "left";	     
		} else if(e.keyCode == 38) { //up
		    direction = "up";
		} else if(e.keyCode == 39) { //right
		    direction = "right";
		} else if(e.keyCode == 40) { //down
		    direction = "down";
		} else { 
		    //return;
		}
		userPlay(direction);
		console.log(direction);
    }
}


var userPlay = function(direction) { 

	for(var i = 0; i < 16; i++) { 
		
		var BOX = document.getElementsByClassName('box')[i];

		if(direction == "up" && i-4 >= 0) {
			
			var changeBOX = document.getElementsByClassName('box')[i-4];
			changeColor(BOX, changeBOX);

		} else if(direction == "down" && i+4 < 16) {
			
			switch(i) { 
				case 12: 
					break;
				case 13:
					break;
				case 14: 
					break;
				case 16: 
					break;
				default: 
					var changeBOX = document.getElementsByClassName('box')[i+4];
					changeColor(BOX, changeBOX);	
			}

		//might still need to change back to if/else for second condition 	
		} else if(direction == "left" && i > 0) {
 
			switch(i) { 
				case 0: 
					break;
				case 4:
					break;
				case 8: 
					break;
				case 12:
					break;
				default: 
					var changeBOX = document.getElementsByClassName('box')[i-1];
					changeColor(BOX, changeBOX);
			}
 
		} else if(direction == "right") {

			switch(i) { 
				case 3:
					break;
				case 7:
					break;
				case 11: 
					break;
				case 16: 
					break;
				default: 				
					var changeBOX = document.getElementsByClassName('box')[i+1];
					changeColor(BOX, changeBOX);
			}		

		} else { 
			//? 
		}
	}
}

//write to change 
var changeColor = function(thing, nextThing) { 

	var currentClassList = thing.className.split(" ");
	var changeBOXList = nextThing.className.split(" ");

			if(currentClassList.length >= 2 && changeBOXList.length <= 1) { 

					var color = currentClassList[1];
					nextThing.classList.add(color);
					thing.classList.remove(color);
			} 
	return;
}











