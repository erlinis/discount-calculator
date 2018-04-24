import React, { Component } from 'react';
import DataDisplayer from '../components/DataDisplayer';
import PropTypes from "prop-types";

export default class Calculator extends Component {

  calculateSaving(price, discount){
    return price * (discount / 100);
  }

  calculateSalePrice(price, saving){
    return price - saving;
  }

  render(){
    var price     = this.props.price;
    var discount  = this.props.discount;
    var saving    = this.calculateSaving(price, discount);
    var salePrice = this.calculateSalePrice(price, saving);

    return(
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>Original price: </label>
            <input
              type="number"
              name="price"
              placeholder="0"
              onChange={this.props.onChangeInput}
              value={price}/>
          </div>

          <div className="form-group">
           <label>Discount %: </label>
           <input
             type="number"
             name="discount"
             min="1"
             max="1000"
             onChange={ e => this.props.onChangeInput(e)}
             value={discount}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <DataDisplayer
              label="Sale Price"
              styleClass="sale-price"
              data={salePrice.toString()}/>
          </div>

          <div className="form-group">
            <DataDisplayer
              label="Saving"
              styleClass="saving"
              data={saving.toString()}/>
          </div>

          <div className="form-group">
            <button onClick={() => this.props.onAddDiscount(price, discount, salePrice, saving)}>
              + Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.PropTypes = {
 price:         PropTypes.func.number,
 onChangeInput: PropTypes.func.isRequired,
 onAddDiscount: PropTypes.func.isRequired
}

