(function(){
    "use strict";
    console.log('JS is running'); 

    const content = document.querySelector('body');

	document.addEventListener('keydown', function(e){
		const keyPressed = e.key; 
		switch(keyPressed){
			case ('b'):
				content.className="one";
				break; 
			case ('v'):
				content.className="two";
				break;
			case ('c'):
				content.className="three";
				break;
			case ('f'):
				content.className="four";
				break;
			case ('g'):
				content.className="five";
				break;
			default: 
				alert("You didn't press one of the specified keys."); 
		}
	});
})

();