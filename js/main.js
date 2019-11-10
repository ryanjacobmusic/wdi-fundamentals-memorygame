console.log("Up and running!");
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);

const cards = [
{
rank: "queen",
suit: "hearts",
cardimage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardimage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardimage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardimage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId.suit]);
};
flipCard(0);
flipCard(2);

console.log("up and running 2");
flipCard(0);
flipCard(1);



