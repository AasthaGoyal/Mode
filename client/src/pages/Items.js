import ItemListings from "./ItemListings";
import React from "react";


class Items extends React.Component {

  static applyFilters(listings, filter) {

    const {priceFrom, color, sortOrder} = filter;
    let result = listings;
    if(priceFrom ){
        const from = priceFrom;
        result = result.filter(item => item.price >= from)
    }
    if(color){
        result = result.filter(item => item.color = color);
    }
    if(sortOrder)
    {
        if(sortOrder='highestFirst')
        {
            result = result.sort((a,b) => b.price - a.price)
        }
        if(sortOrder = 'lowestFirst')
        {
            result = result.sort((a,b) => a.price - b.price)
        }
    }
   
    return result;

  }

  render() {
    return (
      <div>
        <ItemListings />
      </div>
    );
  }
}

export default Items;
