window.addEventListener("load", () => {
    var form = document.querySelector('.my-form');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        var name = form.elements['name'].value;
        var email = form.elements['email'].value;
        var title = form.elements['title'].value;
        var message = form.elements['message'].value;
    });
});


function thanks() {
    window.alert("Sorry\nThis feature is not supported yet.");
}