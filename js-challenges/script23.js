(function(){
    "use strict";
    console.log('JS is running'); 

    const button = document.querySelector('button');
	const par = document.querySelectorAll('p');

	button.addEventListener('click', function(){
		for (let i = 0; i < par.length; i++) { par[i].style.color = ('green') };}
	); 
})

();