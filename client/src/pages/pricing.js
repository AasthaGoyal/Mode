import React from "react";

class Pricing extends React.Component {
  render() {
    return (
      <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>How many users do you have?</span>
            <input type="range" />
          </label>
          <div className="pricing-slider-value">
            {/* Current slider value */}
          </div>
        </div>

        <div className="pricing-items">
          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div class="pricing-item-title">Basic</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency" />
                    <span className="pricing-item-price-amount">Free</span>
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li>Excepteur sint occaecat</li>
                    <li>Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div class="pricing-item-cta">
                <a class="button" href="http://cruip.com/">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div class="pricing-item-title">Advanced</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">$</span>
                    <span className="pricing-item-price-amount">13</span>
                    /m
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div class="pricing-item-cta">
                <a class="button" href="http://cruip.com/">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;