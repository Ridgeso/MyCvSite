function mainContentAppear() {
    var contentBoxes = document.getElementsByClassName('content-box');
    
    for (let box of contentBoxes) {
        showBoxOnScroll(box, 1, 'content-appear')
    }
}

window.addEventListener('load', mainContentAppear)
window.addEventListener('scroll', mainContentAppear)