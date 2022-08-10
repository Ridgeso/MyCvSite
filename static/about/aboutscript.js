function aboutContentAppear() {
    var contentBoxes = document.getElementsByClassName('my-past');
    
    for (let box of contentBoxes) {
        showBoxOnScroll(box, 0.9, 'content-appear');
    }
}

window.addEventListener('load', aboutContentAppear)
window.addEventListener('scroll', aboutContentAppear)