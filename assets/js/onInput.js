$(document).ready(function(){
    $(".card-number-input").on("input", function(){
        const value = document.querySelector('.card-number-input').value;
        const cardNumber = document.querySelector('.card-number');

        if (!value) {
            cardNumber.innerHTML = "Card Number";
        } else {
            cardNumber.innerHTML = value;
        }
    });
});

$(document).ready(function(){
    $(".card-name-input").on("input", function(){
        const value = document.querySelector('.card-name-input').value;
        const cardName = document.querySelector('.card-holder-name');

        if (!value) {
            cardName.innerHTML = "Name on Card";
        } else {
            cardName.innerHTML = value;
        }
    });
});

$(document).ready(function(){
    $(".card-date-input").on("input", function(){
        const value = document.querySelector('.card-date-input').value;
        const cardDate = document.querySelector('.card-date');

        if (!value) {
            cardDate.innerHTML = "Valid Through";
        } else {
            cardDate.innerHTML = value;
        }
    });
});

$(document).ready(function(){
    $(".card-cvv-input").on("input", function(){
        const value = document.querySelector('.card-cvv-input').value;
        const cardNumber = document.querySelector('.card-cvv');

        if (!value) {
            cardNumber.innerHTML = "CVV";
        } else {
            cardNumber.innerHTML = value;
        }
    });
});