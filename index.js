// Code your solutions in this file
const cards = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(cards) {
  const thankYouArray = [];
  for (let i = 0; i < cards.length; i++){
    thankYouArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`); 
  }
  return thankYouArray;
}

function countDown(count) {
  while (count >= 0) {
    console.log(count--)
  }
}

countDown(10);