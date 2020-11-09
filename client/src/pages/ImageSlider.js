import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import axios from "axios";

class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "Kurta",
      images: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
      .then((res) => {
        if (res.data.success === true) {
          this.setState({
            item: res.data.data,
            images: res.data.data.imgCollection
          });
        } else {
          alert("Some error occured ", res.error);
        }
      })
      .catch((err) => console.log("Some error occured", err));
  }

  render() {
    return <div></div>;
  }
}
