(function(){
    "use strict";
    console.log('JS is running'); 

    const button = document.querySelector('button');
    const par = document.querySelector('p');

    button.addEventListener('click', function(){
	par.style.color = ('green');
}); 
})

();