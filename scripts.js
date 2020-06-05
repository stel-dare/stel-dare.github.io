// Function for smooth scrolling between sections
$(document).ready(function(){
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        //if section is not hidden
             if(!document.getElementById(hash.slice(1)).classList.contains('hide')){
                 //hide opposite section
              document.getElementById(hash.slice(1)==='projects'?'second':'projects').classList.add('hide');
              //scroll to clicked section
                 $('html, body').animate({
                  scrollTop: $(hash).offset().top
                   }, 800, function(){
                   // Add hash (#) to URL when done scrolling (default click behavior)
                   window.location.hash = hash;
                   });   
             }
  
             else{
                 //Hide opposite section
              document.getElementById(hash.slice(1)==='projects'?'second':'projects').classList.add('hide');
              //Unhide  clicked section
              document.getElementById(hash.slice(1)).classList.remove('hide');
              $('html, body').animate({
              scrollTop: $(hash).offset().top
              }, 800, function(){
              // Add hash (#) to URL when done scrolling (default click behavior)
               window.location.hash = hash;
              }); 
             } 
      } 
    });
  });