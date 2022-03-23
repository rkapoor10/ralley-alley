const sortByPrice = (state, data) => {
  if (state.highToLow) {
    return data.sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (state.lowToHigh) {
    return data.sort((a, b) => Number(a.price) - Number(b.price));
  }
  return data;
};

const discountFilter = (state, data) => {
  if (state.discount["10_OR_BELOW"]) {
    return data.filter((product) => product.discount < 10);
  }
  if (state.discount["10_OR_ABOVE"]) {
    return data.filter((product) => product.discount > 10);
  }
  if (state.discount["30_OR_ABOVE"]) {
    return data.filter((product) => product.discount > 30);
  }
  return data;
};

const categoryFilter = (state, data) => {

  const categoriesArray = Object.keys(state.category).filter((value)=>state.category[value] === true)
  if(categoriesArray.length===0)return data
  return data.filter((product)=> categoriesArray.includes(product.categoryName))

};

const ratingsFilter = (state, data) => data.filter(
    (products) => Number(products.ratings.stars) >= Number(state.ratings)
  );


const priceRangeFilter = (state, data) => data.filter(
    (product) => Number(product.price) <= Number(state.priceRange)
  );


export { sortByPrice, discountFilter, categoryFilter, ratingsFilter,priceRangeFilter };
