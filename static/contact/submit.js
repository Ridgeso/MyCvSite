window.addEventListener("load", () => {
    var form = document.querySelector('.my-form');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        var name = form.elements['name'].value;
        var email = form.elements['email'].value;
        var title = form.elements['title'].value;
        var message = form.elements['message'].value;
        
        Email.send({
            SecureToken: "",
            To: "jarskwarczek@gmail.com",
            From: "jarskwarczek@gmail.com",
            Subject: "[WORK]: "+title,
            Body: `${name} sends message\n${email} <- contact back\n\nMessage:\n${message}`
        }).then()
        
        Email.send({
            SecureToken: "",
            To: email,
            From: "jarskwarczek@gmail.com",
            Subject: "Thanks for texting Me!",
            Body: `Hey ${name}\n\nI am so glad you wrote to me. I will send back as soon I read your message.\n\n Best Regards Jarosław Skwarczek`,
        }).then()
    })
    
});


function thanks() {
    window.alert("Thank you for sending a message. I will respond as soon as it possible");
}