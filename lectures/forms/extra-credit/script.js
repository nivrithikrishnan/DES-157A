( function(){
    'use strict';
    console.log('Reading JS');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formData = document.querySelectorAll("input[type=text]"); 
    const words = []; 

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        processFormData(formData);
    });

    function makeMadlib (words){
        const myText = `Here are the words: ${words[0]}, ${words[1]}, ${words[2]}, ${words[3]}`; 
        madlib.innerHTML = myText;

        for (const field of formData){
            field.value = ''; 
        }
    }

    function processFormData(formdata){
        const words = []; 
        const emptyfields = []; 
        let counter = 0; 

        for (const word of formData){
            if (word.value){
                words.push(word.value);
                // word.value = ""; 
            } else {
                emptyfields.push(counter); 
            }
            counter++; 
        }

        console.log(emptyfields);
        if (emptyfields.length > 0){
            showErrors(formData, emptyfields); 
        } else {
            makeMadlib(words);
        }
    }

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id; 
        const errorText = `Please fix out this field ${errorId}.`;

        madlib.innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus();
    }

} )();