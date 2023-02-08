(function(){
    'use strict';
    console.log('reading js'); 

    const form = document.querySelector('#myform');
    const madlib = document.getElementById('madlib')

    form.addEventListener('submit', function(e){
        e.preventDefault(); 

        const noun1 = document.querySelector('#noun1').value; 
        const noun2 = document.querySelector('#noun2').value; 
        const adj = document.querySelector('#adj').value; 
        const verb = document.querySelector('#verb').value; 

        // console.log(`Noun 1: ${noun1}`); 
        // console.log(`Noun 2: ${noun2}`); 
        // console.log(`Adjective: ${adj}`); 
        // console.log(`Verb: ${verb}`);

        let myText = ``; 
        if (noun1 == ''){
            myText = "Please provide a noun"; 
            document.querySelector('#noun1').focus(); 
        } else if (noun2 == ''){
            myText = "Please provide a noun"; 
            document.querySelector('#noun2').focus(); 
        } else if (adj == ''){
            myText = "Please provide an adjective";
            document.querySelector('#adj').focus(); 
        } else if (verb == ''){
            myText = "Please provide a verb"; 
            document.querySelector('#verb').focus(); 
        } else {
            myText = `Here are the words you submitted: ${noun1}, ${noun2}, ${adj}, ${verb}`;
            const formElements = document.querySelectorAll('input[type=text'); 
            for (let i=0; i<formElements.length; i++){
                formElements[i].value = ''; 
            } 

            // for (const temp of formElements){
            //     formElements[i].value = '';
            // }
        }
        madlib.innerHTML = `${myText}`;
    }); 


})
(); 