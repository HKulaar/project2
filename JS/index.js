
            function validateForm() {
              let fname= document.forms["myForm"]["fname"].value;
              let lname= document.forms["myForm"]["lname"].value;
             
              var email= document.forms["myForm"]["email"].value;
              
             //first name validation
              if (fname == "") {
                alert("First Name must be filled out");
                return false;
              }
             //last name validation
              if (lname.length == 0) {
                alert("Last Name must be filled out");
                 
                 return false;
             }

             
             // email validation
             if (email.length == 0) {
                alert("email must be filled out");
                 
                 return false;
             }

            
             // will show alert
             alert( "Hello, "+fname + " "+lname + "\nWe will contact you within 1-2 business days through: " + email +"\nThank you for choosing us."  );
            }
            