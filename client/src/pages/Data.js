import React from "react";
import Details from "./Details";
import axios from "axios";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      item: [],
    };
    console.log(this.props.category);
  }

  componentDidMount() {
    if (this.props.selectedSort) {
      axios
        .get("http://localhost:3001/items/getSortedItems/" + this.props.category, {
          params: {
            sort: this.props.selectedSort,
            limit: this.props.selectedLimit || "100",
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            this.setState({ item: res.data.data });
          } else {
            alert("Some error occured ", res.error);
          }
        })
        .catch((err) => console.log("Some error occured", err));
    } else {
      axios
        .get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
        .then((res) => {
          if (res.data.success === true) {
            this.setState({
              item: res.data.data,
            });
          } else {
            alert("Some error occured ", res.error);
          }
        })
        .catch((err) => console.log("Some error occured", err));
    }
  }

  imageClick = (id) => {
    this.setState({
      showDetails: true,
      itemId: id,
    });
   
  };

  render() {
    if (this.state.showDetails) {
      return <Details itemId={this.state.itemId} />;
    } else {
      if (this.state.item.length === 0) {
        return (
          <div class="loading-more">
            <i class="icon_loading"></i>
            <a href="#">Loading More</a>
          </div>
        );
      } else {
        let itemLists = this.state.item;
        let items = itemLists.map((it) => {
          return (
            <div class="col-lg-4 col-sm-6">
              <div class="product-item">
                <div class="pi-pic">
                  <a href={it.id}>
                    <img
                      src={it.imgCollection[0]}
                      alt=""
                      style={{ width: "260px", height: "353px", cursor:"pointer" }}
                      onClick={() => this.imageClick(it._id)}
                    />
                  </a>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">{it.category}</div>
                  <a href={it.id}>
                    <h5>
                      {" "}
                      <label onClick={() => this.imageClick(it._id)}>
                        {it.name}
                      </label>
                    </h5>
                  </a>
                  <div class="product-price">Rs. {it.price}</div>
                </div>
              </div>
            </div>
          );
        });

        return (
          <div class="product-list">
            <div class="row">{items}</div>
          </div>
        );
      }
    }
    //     return (
    //       <div>
    //         Hi i m one {this.props.sort} and limit {this.props.limit} and price rnge{" "}
    //         {this.props.priceRange} and color {this.props.color} and size{" "}
    //         {this.props.size}
    //       </div>
    //     );
  }
}

export default Data;
