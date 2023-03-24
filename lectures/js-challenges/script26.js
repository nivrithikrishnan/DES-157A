(function(){
    "use strict";
    console.log('JS is running'); 

    const content = document.querySelector('div');
	const buttonAdd = document.querySelectorAll('button')[0];
	const buttonRemove = document.querySelectorAll('button')[1];

	buttonAdd.addEventListener('click', function(){
		const new_par = document.createElement('p'); 
		const index = document.querySelectorAll('p').length; 
		new_par.appendChild(document.createTextNode(`This is paragraph number ${index}`));
		content.appendChild(new_par); 
	}); 

	buttonRemove.addEventListener('click', function(){
		content.removeChild(content.children[document.querySelectorAll('p').length-1]) 
	}); 
})

();