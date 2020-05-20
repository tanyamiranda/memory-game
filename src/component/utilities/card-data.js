export const SPANISH_CARD_SYMBOLS = ["coins","cups", "clubs", "swords"]; 
export const SPANISH_CARD_VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9","10", "11", "12"];

export const CLASSIC_CARD_SYMBOLS = ["hearts","diamonds", "spades", "clubs"]; 
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

    const maxIndex = fullCardDeck.length;
    const randomCardSelection = [];

    let uniquePairs = 0;
    for(let i = 0; uniquePairs < pairCount; i++) {
        
        // Choose a random card between 0 and fullCardDeck.length inclusively
        const randomIndex = Math.floor(Math.random() * (maxIndex));
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


export const getRandomCardValuePairs = (cardCount) => {

    const pairCount = cardCount / 2;
    
    // Get array of paired random numbers
    const randomArray = [];
    let uniquePairs = 0;
    for(let i = 0; uniquePairs < pairCount; i++) {
        
        let num = Math.floor(Math.random() * 100);
        
        if (num > 0 && !randomArray.includes(num)) {
            randomArray.push(num);
            uniquePairs++;
        }
    }

    //Add the random numbers twice to the array. Those are the pairs.
    let allCards = [].concat(randomArray).concat(randomArray);

    return shuffleCards(allCards);

}
