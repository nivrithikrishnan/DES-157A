(function(){
    'use strict';
    console.log('reading js'); 

    /* variable declarations */
    let index = 1;  
    let direction = true;  
    let infoNode;      

    const slideshow = document.querySelector("div ul");    
    const card = document.getElementById('card'); 
    let current = document.getElementsByTagName("li")[0].firstChild;     

    /* starts slideshow on first image */
    slideshow.style.transform = `translateX(20em)`;

    /* function to start the slideshow */
    function startSlideshow() {
        /* variable declarations */
        const numImages = document.querySelectorAll("img");     

        /* moves carousel */
        slideshow.style.transform = `translateX(-${(index-1) * 20}em)`;
        //moves to the first image when returning
        if (!direction && index == 0){
            slideshow.style.transform = `translateX(${20}em)`;
        }

        /* transforms current image */
        if (index >= 0){
            current.classList.remove("active");
            /* updates direction if necessary */ 
            if (direction && document.getElementsByTagName("li")[index+1] == undefined){ 
                direction = !direction; 
            } else if (!direction && document.getElementsByTagName("li")[index-1] == undefined){ 
                direction = !direction; 
            }
            current = document.getElementsByTagName("li")[index].firstChild; 
            current.classList.add("active"); 
        }

        /* increments index based on current direction */
        (direction) ? index+=1 : index-=1; 
    }

    /* function for pop-up */
    document.querySelectorAll("div ul img").forEach(function(element){
        element.addEventListener("click", function(e){
            if (element.classList.contains("active")){
                /* blur slideshow, display card */
                slideshow.style.webkitFilter = "blur(10px)";
                card.style.display = "flex";

                /* pop-up content */
                /* adds image */
                var preview = element.cloneNode(true); //creates a duplicate element 
                preview.classList.add("start"); 
                document.getElementById("card-img").appendChild(preview); 

                /* zoom-in */
                letszoom(preview);

                /* adds description */
                infoNode = document.createTextNode(element.getAttribute('alt'))
                document.getElementById("card-info").appendChild(infoNode);

                clearInterval(start);
            } 
        });
    })

    /* function for closing pop-up */
    document.getElementById("close").addEventListener("click", function(e){
        slideshow.style.webkitFilter = "blur(0px)";
        card.style.display = "none"; 
        
        /* deletes pop-up content */
        document.getElementById("card-img").removeChild(document.getElementById("card-img").firstChild);
        document.getElementById("card-info").removeChild(infoNode);
        
        /* timer for running the slideshow */
        start = setInterval(startSlideshow, 2000);
    }); 

    /* timer for running the slideshow */
    var start = setInterval(startSlideshow, 1000);

    /* copy pasted from zoom-in file */
    /* main function */
    function letszoom(theImg){
        const hotSpots = document.querySelectorAll('#card-img div');
        let thisSpot;    //current hotspot
        let movingMouse;        //is mouse moving

        function zoomPhoto(event) {
            thisSpot = event.target.id;
            console.log(`zooming into ${thisSpot}`);
            switch (thisSpot) {
                case 'topleft': theImg.className = 'topleft'; break;
                case 'topright': theImg.className = 'topright'; break;
                case 'bottomleft': theImg.className = 'bottomleft'; break;
                case 'bottomright': theImg.className = 'bottomright'; break;
                case 'center': theImg.className = 'center'; break;
            }
        }

        /* event listeners for each hotspot */
        hotSpots.forEach(function (eachSpot) {
            eachSpot.addEventListener('mouseover', zoomPhoto);
            eachSpot.addEventListener('mouseout', function () {
                thisSpot = 'out';
                console.log(thisSpot);
            });
        });

        document.addEventListener('mousemove', function(){
            clearTimeout(movingMouse);
            console.log(thisSpot);
            if(thisSpot == 'out'){
                movingMouse = setTimeout(function(){
                    theImg.className = 'start';
                    console.log('zooming out!');
                }, 1000);
            }
        });
    }
})

();