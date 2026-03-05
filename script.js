let deck = Array.from({ length: 52 }, (_, i) => i + 1);

function shuffle(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
console.log(deck)
function drawCard(){
    if (deck.length === 0) return null;
    return deck.pop();
}
deck = shuffle(deck);
console.log(drawCard());


//CARD DECKS/BUTTONS
const button1 = document.getElementById("kort1")
button1.addEventListener("click1" ())
