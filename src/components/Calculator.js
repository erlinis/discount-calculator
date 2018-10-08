import React, { Component } from 'react';
import DataDisplayer from '../components/DataDisplayer';
import Label from '../components/Label';
import PropTypes from 'prop-types';

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
      <div className="mb-4">
        <div className="flex flex-wrap -ml-3 mb-1 -mt-3">
          <div className="w-2/3 sm:w-3/4 mb-3 pl-3">
            <Label inputFor="price" text="Price" />
            <input
              className="appearance-none block w-full bg-grey-white text-grey-darkest text-lg border border-grey-light shadow rounded py-3 px-3"
              type="number"
              id="price"
              name="price"
              min="1"
              max="1000000000000"
              placeholder="0"
              autoFocus
              ref={this.props.priceInputRef}
              onChange={this.props.onChangeInput}
              value={price}/>
          </div>

          <div className="w-1/3 sm:w-1/4 mb-3 pl-3">
            <Label inputFor="discount" text="Discount %" />
            <div className="relative">
              <input
                className="appearance-none block w-full bg-grey-white text-grey-darkest text-lg border border-grey-light shadow rounded py-3 px-3"
                type="number"
                id="discount"
                name="discount"
                min="1"
                max="100"
                onChange={this.props.onChangeInput}
                value={discount}/>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darkest"> % </div>
            </div>
          </div>


          <div className="w-3/4 sm:w-3/4 mb-3 pl-3">
            <Label inputFor="description" text="Description"/>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-grey-white text-grey-darkest text-lg border border-grey-light shadow rounded py-3 px-3"
                type="text"
                id="description"
                name="description"
                max="100"
                onChange={this.props.onChangeInput}
                value={this.props.description}/>
            </div>
          </div>

          <div className="flex items-end w-1/4 sm:w-1/4 pl-3 mb-3">
              <button
                className="shadow bg-teal hover:bg-teal-light text-white py-3 px-3 rounded-lg flex-1"
                onClick={() => this.props.onAddDiscount(price, discount, salePrice, saving, this.props.description)}>
                  Add +
              </button>
          </div>
        </div>

        <DataDisplayer
          salePrice={salePrice}
          price={price.toString()}
          discount={discount.toString()}
          saving={saving}
          description={this.props.description}
        />
      </div>
    );
  }
}

Calculator.propTypes = {
 price:         PropTypes.string,
 description:   PropTypes.string,
 priceInputRef: PropTypes.object,
 onChangeInput: PropTypes.func.isRequired,
 onAddDiscount: PropTypes.func.isRequired
}

