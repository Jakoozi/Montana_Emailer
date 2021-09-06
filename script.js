

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
       
    }, function(error) {
       console.log('FAILED...', error);
       document.getElementById("delivery-status").innerHTML = "Error !!!";
       swal("Oops!", error, "error");
    });
}

function AfterEmailSentSuccessfully(){
    console.log('SUCCESS!', response.status, response.text);
    document.getElementById("delivery-status").innerHTML = "Successfull !!!";
    swal("Done!", response.text, "success");
}