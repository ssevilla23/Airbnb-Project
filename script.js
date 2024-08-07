function filterByCity(targetCity, listingCityArray) {
  let cityIndices = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (targetCity.toLowerCase() == listingCityArray[i].toLowerCase()) {
        cityIndices.push(i);
    }
  }
  return cityIndices;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  // return [...listingPriceArray.keys()]
  
  let priceIndices = [];
  let i = 0;
  while (i < listingPriceArray.length){
    if (minPrice <= listingPriceArray[i] && listingPriceArray[i] <= maxPrice) {
      priceIndices.push(i);
    }
    i++;
  }
  return priceIndices;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  // return [...listingTypeArray.keys()]
  
  let typeIndices = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    if (targetTypes.includes(listingTypeArray[i])) {
      typeIndices.push(i);
    }
  }
  return typeIndices;
}