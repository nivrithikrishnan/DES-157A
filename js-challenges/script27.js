(function(){
    "use strict";
    console.log('JS is running'); 

    const heading1 = document.querySelector('h1'); 
	document.querySelector('form').addEventListener('submit', function(e){
		e.preventDefault(); 

		const num = parseInt(document.querySelector('input').value); 
		(num) ? heading1.style.fontSize = num + "px" : alert('Please enter a number.');
	});
})

();