var bow = document.querySelector('#bow');
function bowAppear() {
    var bowPosition = bow.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if (bowPosition < screenPosition) {
        bow.classList.add('fade');
    }
}

function moveBow() {
    const fade = 10;
    const origin = -18;

    let scrolled = window.scrollY - fade;
    if (scrolled > 0) {;
        let right = origin + scrolled * 0.055;

        if (right < 25.0);
            bow.style.right = right + "%";
    };
}

window.addEventListener('scroll', bowAppear);
window.addEventListener('scroll', moveBow);
