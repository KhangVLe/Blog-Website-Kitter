

function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var message = document.contactForm.message.value;

   var nameErr = emailErr = messageError = true; 
    
    if(name == ""){
        printError("nameErr", "Please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "Please enter a valid name");
        }else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(email == ""){
        printError("emailErr", "Please enter your email");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emailErr", "Please enter a valid email address");
        }else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(message == ""){
        printError("messageError", "Please enter a message");
    } else {
        printError("messageError", "");
        messageError = false;
    }

    if(nameErr || emailErr || messageError == true){
        return false;
    }else{
        alert('Thank you. Your message has been sent.');
    }
}
