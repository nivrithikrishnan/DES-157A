(function(){
    "use strict";
    console.log('JS is running'); 

    const content = document.querySelector('div');
	const button = document.querySelector('button');

	button.addEventListener('click', function(){
        const new_par = document.createElement('p'); 
	new_par.appendChild(document.createTextNode('Here is another paragraph')); 

	content.appendChild(new_par); 
	});
})

();