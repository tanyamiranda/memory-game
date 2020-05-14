export const shuffle = (array) => {
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

export const getShuffledCards = (cardCount) => {

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

    return shuffle(allCards);

}
