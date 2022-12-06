function validate() {
    if( document.myForm.fname.value == "" ) {
        alert( "First Name cannot be empty" );
        document.myForm.fname.focus() ;
        return false;
     }
}