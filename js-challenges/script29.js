(function(){
    "use strict";
    console.log('JS is running'); 

    const content = document.querySelector('body');
	window.addEventListener('scroll', function(){
		switch(true){
			case (window.pageYOffset < 500):
				content.className="one";
				break; 
			case (window.pageYOffset < 1000):
				content.className="two";
				break;
			case (window.pageYOffset < 1500):
				content.className="three";
				break;
			case (window.pageYOffset < 2000):
				content.className="four";
				break;
			default: 
				content.className="five"; 
		}
	});
})

();