window.addEventListener('scroll', () => {
    var cards = document.getElementsByClassName('card');
    for (let card of cards) {
        var card_on_center = card.getBoundingClientRect().top+(card.clientHeight - window.innerHeight)/2;

        var card_right_shift = Math.cos(Math.PI*card_on_center/window.innerHeight);

        // harmonic function
        // var right = -40 + 35 * card_right_shift + "%";
        var right = -20 + 15 * card_right_shift + "%";

        card.style.right = right;
    }
})