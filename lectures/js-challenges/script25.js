(function(){
    "use strict";
    console.log('JS is running'); 

    const content = document.querySelector('div');
	const buttonAdd = document.querySelectorAll('button')[0];
	const buttonRemove = document.querySelectorAll('button')[1];

	buttonAdd.addEventListener('click', function(){
		const new_par = document.createElement('p'); 
		new_par.appendChild(document.createTextNode('Here is another paragraph')); 

		content.appendChild(new_par); 
	}); 

	buttonRemove.addEventListener('click', function(){
        const allP = document.querySelectorAll('p'); 
        content.removeChild(content.children[allP.length-1]) 
	}); 
})

();