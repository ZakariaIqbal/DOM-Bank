// step-1 : add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2 : get the email address inside the email input field
    // always remember to use .value to get text from a input field
   let email = document.getElementById("email_field").value
   let pass = document.getElementById("pass_field").value
      if (email=="zakaria00sakib@gmail.com" && pass== "112233"){
        console.log ("Valid");
      }
      else {
        console.log ("inValid");
      }
}) 