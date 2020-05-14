export const SPANISH_CARD_SYMBOLS = ["coins","cups", "clubs", "swords"]; // Hearts,Diamons, Spades, Clovers
export const SPANISH_CARD_VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9","10", "11", "12"];

export const CLASSIC_CARD_SYMBOLS = ["hearts","diamonds", "spades", "clovers"]; // Hearts,Diamons, Spades, Clovers
export const CLASSIC_CARD_VALUES = ["2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K", "A"];
    
const getCardSet = (cardSymbols, cardValues) => {

	let fullCardDec = [];

	cardValues.forEach( value =>
		cardSymbols.forEach(symbol =>
			fullCardDec.push(value + "-" + symbol)
		)
	);
	return fullCardDec;
}

const shuffleCards = (array) => {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

export const getPairedUpCardSet = (cardCount) => {

    const pairCount = cardCount / 2;
    
    const fullCardDeck = getCardSet(CLASSIC_CARD_SYMBOLS, CLASSIC_CARD_VALUES);

    const minIndex = 0;
    const maxIndex = fullCardDeck.length;
    const randomCardSelection = [];
    let uniquePairs = 0;
    for(let i = 0; uniquePairs < pairCount; i++) {
        
        // Choose a random card between 0 and fullCardDeck.length inclusively
        const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
        const card = fullCardDeck[randomIndex];

        // Add unique cards and it's duplicate to the set
        if (!randomCardSelection.includes(card)) {
            randomCardSelection.push(card);
            randomCardSelection.push(card);
            uniquePairs++;
        }
    }

    return shuffleCards(randomCardSelection);

}

