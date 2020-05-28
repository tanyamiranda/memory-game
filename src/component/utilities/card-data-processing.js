export const SYMBOL_HEARTS = "♥";
export const SYMBOL_SPADES = "♠";
export const SYMBOL_DIAMONDS = "♦";
export const SYMBOL_CLUBS = "♣";

export const CLASSIC_CARD_SYMBOLS = [SYMBOL_CLUBS, SYMBOL_DIAMONDS, SYMBOL_HEARTS, SYMBOL_SPADES]; 
export const CLASSIC_CARD_VALUES = ["A","2", "3", "4", "5", "6", "7", "8", "9"];

export const GameLevels = {
    EASY: "easy",
    MEDIUM: "medium",
    HARD: "hard"
}
    
export const getCardSet = (cardSymbols, cardValues) => {

    let fullCardDec = [];

    cardValues.forEach( value =>
    	cardSymbols.forEach(symbol =>
    		fullCardDec.push(value + "-" + symbol)
    	)
    );
    return fullCardDec;
}

export const getCombinationCardSet = (cardSymbols, cardValues, level) => {

    let fullCardDeck = [];

    // Get the full card deck 
    cardValues.forEach( value =>
    	cardSymbols.forEach(symbol =>
    		fullCardDeck.push(value + symbol)
    	)
    );

    /**
     * Easy: "A-hearts", "5-spades", etc.
     * Medium: Combine 2 values per card: "A-hearts-8-spades", "5-spades-2-diamonds", etc.
     * Hard: Combine 3 values per card: "A-hearts-8-spades-3-clubs", "5-spades-2-diamonds-9-spades", etc.
     */
    let combinationCardDeck = [];

    if(level ===  GameLevels.MEDIUM) {
        const newDeck = addRandomCardsFromDeck(fullCardDeck, 1);
        combinationCardDeck = [].concat(newDeck);
    }
    else if (level === GameLevels.HARD) {
        const newDeck = addRandomCardsFromDeck(fullCardDeck, 2);
        combinationCardDeck = [].concat(newDeck);
    }
    else 
        combinationCardDeck = [].concat(fullCardDeck);

    return combinationCardDeck;
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

export const getPairedUpCardSet = (cardCount, level) => {

    const pairCount = cardCount / 2;
    
    //const fullCardDeck = getCardSet(CLASSIC_CARD_SYMBOLS, CLASSIC_CARD_VALUES, level);

    const fullCardDeck = getCombinationCardSet(CLASSIC_CARD_SYMBOLS, CLASSIC_CARD_VALUES, level);

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

export const pickRandomCardFromDeck = (cardDeck) => {

    let num = Math.floor(Math.random() * (cardDeck.length-1));
    return cardDeck[num];

}

export const addRandomCardsFromDeck = (cardDeck, randomCount=0) => {

    let multipliedCardDeck = []

    cardDeck.forEach (card => {
        
        let newCard = card;

        for (let x=0; x < randomCount; x++) {
            const randcomCard = pickRandomCardFromDeck(cardDeck);
            newCard = newCard + "," + randcomCard;
        }
        multipliedCardDeck.push(newCard)
    })

    return multipliedCardDeck;
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
