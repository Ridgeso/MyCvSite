// Get Scroll Button
var scrollButton = document.getElementById("scroll");

// Set OnClick Function to Scroll Up
scrollButton.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

// Invisible on top of the site
window.addEventListener("scroll", () => {
    scrollButton.classList.toggle("fade", window.scrollY > 300);
})

var openButton = document.querySelector('.open');
var closeButton = document.querySelector('.close');
var navBar = document.querySelector('#top-bar');

openButton.onclick = () => {
    openButton.setAttribute('visible', false);
    closeButton.setAttribute('visible', true);
    navBar.setAttribute('visible', true);
}

closeButton.onclick = () => {
    closeButton.setAttribute('visible', false);
    openButton.setAttribute('visible', true);
    navBar.setAttribute('visible', false);
}