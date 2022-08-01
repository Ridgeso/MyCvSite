function contentAppear() {
    var contentBoxes = document.getElementsByClassName('content-box');
    var screenPosition = window.innerHeight / 1.2;
    
    for (let box of contentBoxes) {
        var boxPosition = box.getBoundingClientRect().top;
    
        if (boxPosition < screenPosition) {
            box.classList.add('content-appear');
        }
    }
}

window.addEventListener('scroll', contentAppear)