const IMAGE_PREFIX = "flower";
const IMAGE_COUNT = 20;
const IMAGE_SUFFIX = ""
    
export const getGameImageSet = (cardCount) => {

    const pairCount = cardCount / 2;

    const allImages = getAllImages();

    const randomImages = selectRandomItemsFromArray(allImages, pairCount);

    const pairedImages = [].concat(randomImages).concat(randomImages);

    return shuffleArray(pairedImages);

}

const getAllImages = () => {

    let allImages = [];

    for (let x = 1; x <= IMAGE_COUNT; x++)
        allImages.push(IMAGE_PREFIX + "_" + x + IMAGE_SUFFIX);	
        
    return allImages;
}

const shuffleArray = (array) => {
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

const selectRandomItemsFromArray = (completeArray, itemCount) => {

    const maxIndex = completeArray.length;
    const randomSelection = [];

    let uniqueItems = 0;

    for(let i = 0; uniqueItems < itemCount; i++) {
        
        // Choose a random card between 0 and length inclusively
        const randomIndex = Math.floor(Math.random() * (maxIndex));
        const item = completeArray[randomIndex];
        if (!randomSelection.includes(item)) {
            randomSelection.push(item);
            uniqueItems++;
        }
    }

    return randomSelection;

}

