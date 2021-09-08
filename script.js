

function EmailSender(){

    document.getElementById("email-submit-button").disabled  = true;
 
    var tempParams ={
        // from_name : document.getElementById("fromName").value,
        to_name : document.getElementById("toName").value,
        to_email : document.getElementById("toEmail").value,
        message : document.getElementById("message").value,
        // canvas : 'logo.PNG'
    }
    console.log(tempParams)

    emailjs.send('gmail', 'template_general', tempParams)
    .then(function(response) {
       AfterEmailSentSuccessfully(response)
    }, function(error) {
      AfterEmailSentUnSuccessfully(error)
    });
    
}

function AfterEmailSentSuccessfully(response){
    console.log('SUCCESS!', response);
    document.getElementById("delivery-status").innerHTML = "Successfull !!!";
    document.getElementById("delivery-status").style.color = "Green";
    document.getElementById("email-submit-button").disabled  = false;
    Swal("Done!", response.text, "success");
}
function AfterEmailSentUnSuccessfully(error){
    console.log('FAILED...', error);
    document.getElementById("delivery-status").innerHTML = "Error !!!";
    document.getElementById("delivery-status").style.color = "red";
    document.getElementById("email-submit-button").disabled  = false;
    Swal("Oops!", error, "error");
}