const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

let deck = suits.flatMap(suit =>
    ranks.map((rank, i) => ({
        display: `${rank}${suit}`,
        value: i + 2
    }))
);

let score1 = 0;
let score2 = 0;

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function drawCard() {
    if (deck.length === 0) return null;
    return deck.pop();
}

deck = shuffle(deck);

const button = document.getElementById("draw-btn");
const display1 = document.getElementById("card1-display");
const display2 = document.getElementById("card2-display");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

button.addEventListener("click", () => {
    const card1 = drawCard();
    const card2 = drawCard();

    if (card1 === null || card2 === null) {
        result.textContent = "Ingen flere kort!";
        button.disabled = true;
        return;
    }

    display1.textContent = card1.display;
    display2.textContent = card2.display;

    if (card1.value > card2.value) {
        score1 += 2;
        result.textContent = "Spiller 1 vinner!";
    } else if (card2.value > card1.value) {
        score2 += 2;
        result.textContent = "Spiller 2 vinner!";
    } else {
        result.textContent = "Uavgjort!";
    }

    scoreDisplay.textContent = `Spiller 1: ${score1} kort — Spiller 2: ${score2} kort`;

    if (deck.length === 0) {
        if (score1 > score2) result.textContent = `Spill slutt! Spiller 1 vinner med ${score1} kort!`;
        else if (score2 > score1) result.textContent = `Spill slutt! Spiller 2 vinner med ${score2} kort!`;
        else result.textContent = "Spill slutt! Uavgjort!";
        button.disabled = true;
    }
});

console.log(deck.map(card => card.display));