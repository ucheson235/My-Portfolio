// toggle navigator.

// function toggleNav() {
    
//     const navLinks = document.getElementById("navLinks");
  
    
//     navLinks.classList.toggle("active");
//   }

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.getElementById("navLinks");
    const toggleButton = document.getElementById("toggleButton");
    const closeButton = document.getElementById("closeButton");

    toggleButton.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    closeButton.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

  

//   ---------------------------------------------------
// contact us function 

   const scriptURL = 'https://script.google.com/macros/s/AKfycbw3xepclcsC1c40N78xB8cLUtI_nDYiN-XeW2jCy-MDBYIPgEJpjSF0mikCXbQclEBMig/exec'
      const form = document.forms['submit-to-google-sheet']

      form.addEventListener('submit', e =>{
        e.preventDefault()
        fetch(scriptURL,{method:'POST', body: new FormData(form)})
           .then(response => console.log('Success!',response))
           .catch(error =>console.error('Error!',error.message))
      }) 