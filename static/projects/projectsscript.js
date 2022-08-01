// import { scrollingTopButton } from "../module"

window.addEventListener("load", () => {
    // Get bow
    let bow = document.getElementById("bow")
    
    //Invisible on top of the site
    const fade = 10
    const origin = -18
    window.addEventListener("scroll", () => {
        let scrolled = window.scrollY - fade
        console.log(scrolled)
        if (scrolled > 0) {
            bow.className = "fade"
            let right = origin + scrolled * 0.055

            if (right < 25.0)
                bow.style.right = right + "%"
        }
        else {
            bow.className = ""
            bow.style.right = "-32%"
        }
    })

    // window.addEventListener("scroll", () => {
    //     let rightVal = parseFloat(bow.style.right)
    //     if (bow.className === "fase" && rightVal < 92) {

    //     }
    // })
})