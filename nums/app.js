const BASE_URL = "http://numbersapi.com";

//1
$.getJSON(BASE_URL + "/7/trivia?json")
    .then(response => {
    $("#my-fav-num").append(`<p>${response.text}</p>`);
    })

//2
$.getJSON(BASE_URL + "/1..7/trivia?json")
    .then(response => {
        for (let fact in response) {
            $("#multiple-nums").append(`<p>${response[fact]}</p>`)
        }
    })

//3
let fourFactPromises = [];

for (let i=1; i<5; i++) {
    fourFactPromises.push($.getJSON(BASE_URL + "/7/trivia?json"));
}

Promise.all(fourFactPromises)
    .then(factArr => (
        factArr.forEach(fact => $("#four-facts").append(`<p>${fact.text}</p>`))
    ))


