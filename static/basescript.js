let scrollingTopButton = false

window.addEventListener("load", () => {
    // Get Scroll Button
    let scrollButton = document.getElementById("scroll");
    
    // Set OnClick Function to Scroll Up
    scrollButton.onclick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        scrollingTopButton = true
    }

    // Invisible on top of the site
    window.addEventListener("scroll", () => {
        scrollButton.classList.toggle("fade", window.scrollY > 300);
    })
    // Reached top?
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            scrollingTopButton = false
        }
    })
})