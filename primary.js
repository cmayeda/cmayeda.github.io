window.onload = function() { 
	
	createGrid();	
	fillGrid();

	var direction = null; 
	var count = 0;
		
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

		count++;
		userPlay(direction);
		console.log(direction); 
		if( count%3 == 0 ) { 
    		addBox();
    	}
    }

}

var userPlay = function(direction) { 

	if(direction == "up") {

		for(var i = 4; i <= 15; i++) { 
			var BOX = document.getElementsByClassName('box')[i];
			var changeBOX = document.getElementsByClassName('box')[i-4];
			changeColor(BOX, changeBOX);	
		}

	} else if(direction == "down") {

		for(var i = 11; i >= 0; i--) { 
			var BOX = document.getElementsByClassName('box')[i];
			var changeBOX = document.getElementsByClassName('box')[i+4];
			changeColor(BOX, changeBOX);	
		}

	} else if(direction == "left") {

		for(var i = 0; i <= 15; i++){ 
			
			var BOX = document.getElementsByClassName('box')[i];
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

		}

	} else if(direction == "right") {

		for(var i = 14; i >= 0; i--){ 
			var BOX = document.getElementsByClassName('box')[i];
			switch(i) { 
				case 3:
					break;
				case 7:
					break;
				case 11: 
					break;
				default: 				
					var changeBOX = document.getElementsByClassName('box')[i+1];
					changeColor(BOX, changeBOX);
			}		
		}

	} else { 
			//? 
	}
}


//write to change 
var changeColor = function(BOX, changeBOX) { 

	var currentClassList = BOX.className.split(" ");
	var changeBOXList = changeBOX.className.split(" ");
	
	var BOXColor = currentClassList[1];
	var changeColor = changeBOXList[1];

		if(currentClassList.length == 2 && changeBOXList.length == 1) { 
				var color = currentClassList[1];
				changeBOX.classList.add(color);
				BOX.classList.remove(color);


		//color combinations : primary colors 		
		} else if(BOXColor == "red" && changeColor == "blue") { //red + blue = purple
			changeBOX.classList.add("purple"); //works 
			changeBOX.classList.remove("blue");
			BOX.classList.remove("red");
		} else if(BOXColor == "blue" && changeColor == "red") { 
			changeBOX.classList.add("purple");
			changeBOX.classList.remove("red");
			BOX.classList.remove("blue");
		} else if(BOXColor == "blue" && changeColor == "yellow") { //blue + yellow = green 
			changeBOX.classList.add("green");
			changeBOX.classList.remove("yellow");
			BOX.classList.remove("blue");
		} else if(BOXColor == "yellow" && changeColor == "blue") { 
			changeBOX.classList.add("green");
			changeBOX.classList.remove("blue");
			BOX.classList.remove("yellow");
		} else if(BOXColor == "red" && changeColor == "yellow") { //red + yellow = orange 
			changeBOX.classList.add("orange"); 
			changeBOX.classList.remove("yellow");
			BOX.classList.remove("red");
		} else if(BOXColor == "yellow" && changeColor == "red") { 
			changeBOX.classList.add("orange"); 
			changeBOX.classList.remove("red");
			BOX.classList.remove("yellow");

		//color combinations : 2ndary to brown 	
		} else if(BOXColor == "purple" && changeColor == "green") { //purple + green = brown 
			changeBOX.classList.add("brown"); 
			changeBOX.classList.remove("green");
			BOX.classList.remove("purple");
		} else if(BOXColor == "green" && changeColor == "purple") { 
			changeBOX.classList.add("brown"); 
			changeBOX.classList.remove("purple");
			BOX.classList.remove("green");
		} else if(BOXColor == "green" && changeColor == "orange") { //green + orange = brown 
			changeBOX.classList.add("brown"); 
			changeBOX.classList.remove("orange");
			BOX.classList.remove("green");
		} else if(BOXColor == "orange" && changeColor == "green") { 
			changeBOX.classList.add("brown"); 
			changeBOX.classList.remove("green");
			BOX.classList.remove("orange");		
		} else if(BOXColor == "orange" && changeColor == "purple") { //orange + purple = brown 
			changeBOX.classList.add("brown"); 
			changeBOX.classList.remove("purple");
			BOX.classList.remove("orange");	
		} else if(BOXColor == "purple" && changeColor == "orange") { 
			changeBOX.classList.add("brown"); 
			changeBOX.classList.remove("orange");
			BOX.classList.remove("purple");	

		//color combinations : final 	
		} else if(BOXColor == "brown" && changeColor == "brown") { 
			changeBOX.classList.add("black"); 
			changeBOX.classList.remove("brown");
			BOX.classList.remove("brown");
		} else if(BOXColor == "black" && changeColor == "black") { 
			changeBOX.classList.add("white"); 
			changeBOX.classList.remove("black");
			BOX.classList.remove("black");
		} else if(BOXColor == "white" && changeColor == "white") { 
			BOX.classList.remove("white");
		} else { 
			//nothing? 
		}




}










