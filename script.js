

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
       console.log('SUCCESS!', response.status, response.text);
       swal("Done!", response.text, "success");
    }, function(error) {
       console.log('FAILED...', error);
       swal("Oops!", error, "error");
    });
}