(function(){
    "use strict";
    console.log('JS is running'); 

    const content = document.querySelector('div');

	content.addEventListener('mouseover', function(){
		content.className = "big"; 
	});
	content.addEventListener('mouseout', function(){
		// content.className = ""; 
		content.removeAttribute('class');
	});
})

();