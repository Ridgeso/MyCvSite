function showCards() {
    var cards = document.querySelectorAll('.card')

    for (let card of cards) {
        showBoxOnScroll(card, 0.8, 'onShow')
    }

}

window.addEventListener('load', showCards)
window.addEventListener('scroll', showCards)