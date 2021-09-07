

function EmailSender(){
 
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
    Swal("Done!", response.text, "success");
}
function AfterEmailSentUnSuccessfully(error){
    console.log('FAILED...', error);
    document.getElementById("delivery-status").innerHTML = "Error !!!";
    Swal("Oops!", error, "error");
}