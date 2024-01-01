const BASE_URL = "https://deckofcardsapi.com/api";

//1
$.getJSON(BASE_URL + "/deck/new/draw/?count=1")
    .then(response => console.log(response.cards[0].code));

//2
$.getJSON(BASE_URL + "/deck/new/draw/?count=1")
    .then(response => {
        console.log(response.cards[0].code);
        let deck_id = response.deck_id;
        return $.getJSON(BASE_URL + `/deck/${deck_id}/draw/?count=1`)
    })
    .then(response => {
        console.log(response.cards[0].code);
    })

//3
let deck_id = null;
let count;

$.getJSON(BASE_URL + "/deck/new/shuffle/?deck_count=1")
    .then(response => {
        deck_id = response.deck_id;
        count = 52;
        $("#cards").append("<button>Gimme a card!</button>");
    })

$('#cards').on("click", "button", function () {
    count--;
    $.getJSON(BASE_URL + `/deck/${deck_id}/draw/?count=1`)
        .then(res => {
            $("#cards").append(`<img src="${res.cards[0].image}" class="card">`);
            if(count == 0){
                $('button').remove();
            }
        })
});


