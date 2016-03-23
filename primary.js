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
		var currentClassList = BOX.className.split(" ");

		if(direction == "up" && i-4 >= 0) {
			
			var changeBOX = document.getElementsByClassName('box')[i-4];
			var changeBOXList = changeBOX.className.split(" ");

			if(currentClassList.length >= 2 && changeBOXList.length <= 1) { 

				var color = currentClassList[1];
				changeBOX.classList.add(color);
				BOX.classList.remove(color);
			} 

		} else if(direction == "down" && i+4 < 16) {
			
			var changeBOX = document.getElementsByClassName('box')[i+4];
			var changeBOXList = changeBOX.className.split(" ");

			if(currentClassList.length >= 2 && changeBOXList.length <= 1) { 

				var color = currentClassList[1];
				changeBOX.classList.add(color);
				BOX.classList.remove(color);
				//i++;
			} 

		//might still need to change back to if/else for second condition 	
		} else if(direction == "left" && i > 0) {
 








 
				var changeBOX = document.getElementsByClassName('box')[i-1];
				var changeBOXList = changeBOX.className.split(" ");

				if(currentClassList.length >= 2 && changeBOXList.length <= 1) { 

					var color = currentClassList[1];
					changeBOX.classList.add(color);
					BOX.classList.remove(color);

				}
 
		} else if(direction == "right") {

			if(i == 3, 7, 11, 15) { 
				//do nothing
			} else { 
				var changeBOX = document.getElementsByClassName('box')[i+1];
				var changeBOXList = changeBOX.className.split(" ");

				if(currentClassList.length >= 2 && changeBOXList.length <= 1) { 

					var color = currentClassList[1];
					changeBOX.classList.add(color);
					BOX.classList.remove(color);

				}
			}

 
			

		} else { 
			//? 
		}


			

	}
}

//write to change 
var changeColor = function(changeBox, currentClassList, direction) { 

			var changeBOX = document.getElementsByClassName('box')[direction];
			var changeBOXList = changeBOX.className.split(" ");

			if(currentClassList.length >= 2 && changeBOXList.length <= 1) { 

					var color = currentClassList[1];
					changeBOX.classList.add(color);
					BOX.classList.remove(color);
					i++;
			} 

}






var allRed = function() { 
	for(var i = 0; i < 15; i++) { 
		var BOX = document.getElementsByClassName('box')[i]; 
		BOX.classList.add('red');
	}
}	









