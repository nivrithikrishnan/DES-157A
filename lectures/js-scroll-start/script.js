(function () {
    'use strict';

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(eachLink){
        eachLink.addEventListener('click', smoothScroll); 
    }); 

    function smoothScroll(event){
        event.preventDefault(); 

        const targetID = event.target.getAttribute('href'); 
        const targetAnchor = document.querySelector(targetID); 
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 200; 

        window.scrollBy({top: originalTop, left:0, behavior: 'smooth'}); 
        console.log(originalTop);
    }

    window.addEventListener('load', function(){
        const posts = this.document.querySelectorAll('section'); 
        let postTops =[]; 
        let pagetop; 
        let counter = 1; 
        let preCounter = 1; 
        let doneResizing;

        // console.log(posts[0].getBoundingClientRect().top + this.window.pageYOffset);
        postTops.forEach(function(post){
            postTops.push(Math.floor(post.getBoundingClientRect().top + this.window.pageYOffset));
            console.log(postTops);
        });
    });
})();

