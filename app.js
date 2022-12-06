function validate() {
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
    
    if( fname === "" ) {
        var caution = document.getElementById("fname");
        var text = document.getElementById("fname-error");
        text.innerHTML = "First Name cannot be empty" 
        caution.setAttribute("class", "caution");
        caution.style.borderColor="red";
        console.log("First Name cannot be empty" );
         }
     if (lname === "") {
        var caution = document.getElementById("lname");
        var text = document.getElementById("lname-error");
        text.innerHTML = "Last Name cannot be empty" 
        caution.setAttribute("class", "caution");
        caution.style.borderColor="red";
        console.log("Last Name cannot be empty" );
        } 
    if (email===""||!email==="@"||email==="/") {
        var caution = document.getElementById("email");
        var text = document.getElementById("email-error");
        text.innerHTML = "Looks like this is not sn email" 
        caution.setAttribute("class", "caution");
        caution.style.borderColor="red";
        console.log("Looks like this is not an email");
      }
    if (password==="") {
        var caution = document.getElementById("password");
        var text = document.getElementById("pass-error");
        text.innerHTML = "Password Name cannot be empty" 
        caution.setAttribute("class", "caution");
        caution.style.borderColor="red";
        console.log("First Name cannot be empty" );
        return false;  
     }
     return true;
}