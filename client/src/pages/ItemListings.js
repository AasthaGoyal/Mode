import React from "react";
import axios from "axios";

const DefaultState = {
  items: [],
  filters: {}
};


 class ItemListings extends React.Component {
  state = DefaultState;

  componentDidMount() {
    axios
      .get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
      .then((res) => {
        if (res.data.success === true) {
          this.setState({
            items: res.data.data,
          });
        } else {
          alert("Some error occured ", res.error);
        }
      })
      .catch((err) => console.log("Some error occured", err));
  }

  updateFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    let itemPrices = this.state.items.map((item) => {
      return <li> {item.price}</li>
    });

    return <ul>{itemPrices}</ul>;
  }
}

export default ItemListings;
