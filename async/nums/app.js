const BASE_URL = "http://numbersapi.com";

favNum();
multipleNums();
fourFacts();

//1
async function favNum() {
    let res = await $.getJSON(BASE_URL + "/7/trivia?json")
    $("#my-fav-num").append(`<p>${res.text}</p>`);
}

//2
async function multipleNums() {
    let res = await $.getJSON(BASE_URL + "/1..7/trivia?json");
    for (let fact in res) {
        $("#multiple-nums").append(`<p>${res[fact]}</p>`)
    }
}

//3

async function fourFacts() {
    let fact;
    for (let i=0; i<4; i++) {
        fact = await $.getJSON(BASE_URL + "/7/trivia?json");
        $("#four-facts").append(`<p>${fact.text}</p>`);
    }
}


