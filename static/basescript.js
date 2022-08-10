// Main scroll animatio 
function showBoxOnScroll(box, showOnHeight, className) {
    var screenPosition = window.innerHeight * showOnHeight;
    var boxPosition = box.getBoundingClientRect().top;

    if (boxPosition < screenPosition) {
        box.classList.add(className);
    }
}

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

function ShowBar() {
    openButton.setAttribute('visible', false);
    closeButton.setAttribute('visible', true);
    navBar.setAttribute('visible', true);
}
function HideBar() {
    closeButton.setAttribute('visible', false);
    openButton.setAttribute('visible', true);
    navBar.setAttribute('visible', false);
}

openButton.onclick = ShowBar;
closeButton.onclick = HideBar;
window.addEventListener('click', (event) => {
    if (openButton.contains(event.target)) {
        return;
    }
    if (!navBar.contains(event.target)) {
        if (navBar.getAttribute('visible') === 'true'){
            HideBar();
        }
    }
})