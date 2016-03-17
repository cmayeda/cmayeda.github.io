var createGrid = function() { 

	
	var newGrid = document.getElementById('grid');

	/*
	newGrid = []; 

	for( var i = 0; i < 4; i++ ) { 
		var row = []; 
		row.className = "row";

		for ( var j = 0; j < 4; j++) { 
			var box = row[j];
			box.className = "box";
		}
		newGrid[i] = row; 
	} */

	for(var i = 0; i < 4; i++) { 

		var row = document.createElement("div");
		row.className = "row";

		for(var j = 0; j < 4; j++) { 
			var box = document.createElement("div");
			box.className = "box";
			row.appendChild(box);
		}
		newGrid.appendChild(row);
	} 
}

var fillGrid = function() { 

	box.className = "red";

}