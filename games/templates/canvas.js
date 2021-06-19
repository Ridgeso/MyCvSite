const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

let padding = 16;
let width, height;
function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    width = (window.innerWidth - padding) * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    height = (window.innerHeight - padding) * window.devicePixelRatio;

    canvas.style.width = window.innerWidth - padding + "px";
    canvas.style.height = window.innerHeight - padding + "px";
}

resize();
window.onresize = resize;
