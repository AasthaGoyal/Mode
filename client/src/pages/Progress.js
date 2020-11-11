import Slider from "rc-slider";
import React from "react";
import "rc-slider/assets/index.css";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 10,
      upperBound: this.props.max,
      value: [120, 300],
    };
  }

  onLowerBoundChange = (e) => {
    this.setState({ lowerBound: +e.target.value });
  };

  onUpperBoundChange = (e) => {
    this.setState({ upperBound: -e.target.value });
  };

  onSliderChange = (e) => {
    console.log(e);
    this.setState({ value: e });
  };

  render() {
    return (
      <div class="filter-range-wrap">
        <div class="range-slider" style={{height:"30px"}}>
          <div class="price-input">
            <input
              id="lower"
              type="text"
              style={{ width: "80px", height: "30px", float: "left" }}
              value={this.state.value[0]}
           
            ></input>
            <input
              id="upper"
              type="text"
              style={{ width: "120px", height: "30px", float: "right" }}
              value={this.state.value[1]}
            
            ></input>
          </div>
        </div>
        <div style={{height:"30px", width:"210px"}} >
          <Range
      
            id="priceRange"
            min={this.state.lowerBound}
            max={this.state.upperBound}
            value={this.state.value}
            step="10"
            onChange={this.onSliderChange}
            fill="#e7ab3c"
          />

        
        </div>
      </div>
    );
  }
}

export default Progress;
