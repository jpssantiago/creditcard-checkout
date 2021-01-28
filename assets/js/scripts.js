$(document).ready(function(){
    $('.card-number-input').mask('0000 0000 0000 0000');
    $('.card-date-input').mask('00/00');
    $('.card-cvv-input').mask('000');

    $(".card-cvv-input").focus(function() {
        flipCard();
    }).focusout(function() {
        flipCard();
    });
});

const flipCard = () => {
    const card = document.querySelector('.card');

    if (card.classList.contains('flipcard')) {
        card.classList.remove('flipcard');
    } else {
        card.classList.add('flipcard');
    }
}