/*Use a Array.prototype.forEach() loop within another Array.prototype.forEach() loop to build an array representing a deck of cards.A deck consists of 52 cards — 13 ranks in each of 4 suits.
Then display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts".)*/

function showDeck(e) {
  e.preventDefault();
  console.log("youare here");

  const suitsArray = ["clubs", "diamonds", "hearts", "spades"];
  const ranksArray = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  const deckArray = [];

  suitsArray.forEach(function (suit) {
    ranksArray.forEach(function (rank) {
      const card = rank + " of " + suit;
      deckArray.push(card);
    })
  })
  let result = deckArray;
  const div = document.querySelector("div#display");
  div.innerHTML = ''; //clears prev. content

  deckArray.forEach(function (card) {
    const p = document.createElement("p");
    p.innerText = card;
    div.append(p);
  });
}

window.addEventListener("load", function () {
  document.getElementById("showMe").addEventListener("submit", showDeck);
});