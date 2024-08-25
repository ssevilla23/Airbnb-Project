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

function filterByTypes(targetTypes, listingTypeArray) {

  let typeIndices = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    if (targetTypes.includes(listingTypeArray[i])) {
      typeIndices.push(i);
    }
  }
  return typeIndices;
}
