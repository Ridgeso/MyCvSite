// import { scrollingTopButton } from "../module"

window.addEventListener("load", () => {

    let scrollBottom = {top: window.innerHeight, left: 0, behavior: "smooth"}
    let scrollTop    = {top:                  0, left: 0, behavior: "smooth"}
    let shouldScrollBottom = () => { return window.scrollY < window.innerHeight }
    let shouldScrollTop = () =>    { return window.scrollY > (window.innerHeight - 10) && window.scrollY > (window.innerHeight + 20) }

    let isScrolling = false
    let scrollDirection = scrollBottom
    let shouldScrollDirection = shouldScrollBottom
    function scrollOn() {
        if (scrollingTopButton)
            return

        if (shouldScrollDirection()) {
            window.scrollTo(scrollDirection)
            scrollDirection = scrollDirection === scrollBottom ? scrollTop : scrollBottom
            shouldScrollDirection = shouldScrollDirection === scrollBottom ? shouldScrollTop : shouldScrollBottom
            isScrolling = true
        }
    }

    let last = 0
    function scrollOff() {
        let scroll = window.scrollY
        let delta = Math.abs(scroll - last)
        if (Math.abs(delta) <= 1) {
            isScrolling = false
            console.log('scrolling stoped', "SCROLLINGTOPBUTTON", scrollingTopButton);
        }
        last = scroll
        console.log(delta);
    }

    // Get bow
    let bow = document.getElementById("bow")
    //Invisible on top of the site
    const fade = 375
    const origin = -18
    window.addEventListener("scroll", () => {
        if (!isScrolling) {
            console.log('scrolling Started');
            scrollOn()
        }
        else {
            console.log('is scrolling', scrollDirection);
            scrollOff()
        }
        
        // bow.classList.toggle("fade", window.scrollY > fade)
        // bow.style.right = 200 + 'px'
        let scrolled = window.scrollY - fade
        if (scrolled > 0) {
            bow.className = "fade"
            let right = origin + scrolled * 0.05 

            bow.style.right = right + "%"
        }
        else {
            bow.className = ""
            bow.style.right = "-32%"
        }
    })
})