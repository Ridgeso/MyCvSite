window.onload = function() {
    // Get Scroll Button
    let scrollButton = document.getElementById("scroll");
    
    // Set OnClick Function to Scroll Up
    scrollButton.onclick = function() {
        window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
    }

    //Invisible on top of the site
    window.onscroll = function() {
        scrollButton.classList.toggle("fade", window.scrollY > 300);
    }
}