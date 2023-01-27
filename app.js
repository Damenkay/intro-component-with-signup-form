function showError(errorElement, errorMessage){
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML=errorMessage;

}
function redBorderError(elementId){
    let caution = document.getElementById(elementId);
    caution.style.borderColor = "red";
}
function displayCaution(elementId) {
    let targetField = document.getElementById(elementId)
    targetField.setAttribute("class", "caution")
}
document.getElementById("submit-button").addEventListener("click",validate)

function validate() {
    var inputs = document.querySelectorAll("input")
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value==="") {
            showError("fname-error", "First Name cannot be empty");
            redBorderError(inputs[i].id)
            displayCaution(inputs[i].id)
            return false;
        } else 
        // if (inputs[i].value===""&&inputs[i].id==="lname") {
        //     showError("lname-error", "Last Name cannot be empty");
        //     redBorderError("lname")
        //     displayCaution("lname")
        //     return false;
        // }else if (inputs[i].id==="email"&& inputs[i].value===""||
        // !inputs.value==="@"||inputs.value==="/") {
        //     showError("email-error", "Looks like this is not an email");
        //     redBorderError("email")
        //     displayCaution("email")
        // }else if (inputs[i].id==="password"&&inputs[i].value==="") {
        //     showError("password-error", "Password cannot be empty");
        //     redBorderError("password")
        //     displayCaution("password")
        // }else 
        return true;
        
    }
}
