const BASE_URL = "https://deckofcardsapi.com/api";

drawCard();
drawTwoCards();
getDeck();



//1
async function drawCard() {
    let response = await $.getJSON(BASE_URL + "/deck/new/draw/?count=1");
    console.log(response.cards[0].code);
}

//2
async function drawTwoCards() {
    let response = await $.getJSON(BASE_URL + "/deck/new/draw/?count=1");
    console.log(response.cards[0].code);
    let deck_id = response.deck_id;
    response = await $.getJSON(BASE_URL + `/deck/${deck_id}/draw/?count=1`);
    console.log(response.cards[0].code);
}

//3
let deck_id = null;
let count;

async function getDeck() {
    let response = await $.getJSON(BASE_URL + "/deck/new/shuffle/?deck_count=1");
    deck_id = response.deck_id;
    count = 52;
    $("#cards").append("<button>Gimme a card!</button>");
}

$('#cards').on("click", "button", async function () {
    count--;
    let response = await $.getJSON(BASE_URL + `/deck/${deck_id}/draw/?count=1`);
    $("#cards").append(`<img src="${response.cards[0].image}" class="card">`);
    if(count == 0){
        $('button').remove();
    }
    })



