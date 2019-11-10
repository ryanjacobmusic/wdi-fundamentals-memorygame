console.log("Up and running!");
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);

const cards = ["queen", "queen", "king", "king"];
var cardsInPlay = ['cardOne', 'cardTwo', 'cardThree', 'card Four'];

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
}
flipCard(0);
flipCard(2);

if (cardsInPlay[0] === cardsInPlay[1]) if (cardsInPlay.length === 2){
	alert("You found a Match!");
} else {
	alert("Sorry, try again.");
}

console.log("up and running 2");
flipCard(0);
flipCard(1);



