import React from "react";
import axios from "axios";

class ReturnItems extends React.Component {
  constructor(props) {
    super(props);
   
    this.state ={
        item: [],
        sort: '',
        limit: ''
    };
  }

  componentDidMount() {
    console.log('receiving data', this.props.sort, this.props.limit, this.props.category);


  }

//   componentDidMount() { 

   
//   
//   }

  render() {
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

export default  ReturnItems;
