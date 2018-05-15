import React, { Component } from 'react';
import DataDisplayer from '../components/DataDisplayer';
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
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="md:w-1/2 px-1 pl-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Price </label>
              
              <input 
                 className="appearance-none block w-full bg-grey-white text-grey-darkest text-lg border border-grey-light shadow rounded py-3 px-4"
                 type="number" 
                 name="price"
                 min="1"
                 max="1000000000000"
                 placeholder="0"
                 autoFocus
                 onChange={this.props.onChangeInput}
                 value={price}/>
            </div>

            <div className="md:w-1/4 px-1 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"> Discount %</label>
              <div className="relative">
                <input
                  className="appearance-none block w-full bg-grey-white text-grey-darkest text-lg border border-grey-light shadow rounded py-3 px-4"
                  type="number"
                  name="discount"
                  min="1"
                  max="1000"
                  onChange={ e => this.props.onChangeInput(e)}
                  value={discount}/> 
                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darkest"> % </div>
              </div>
            </div>

            <div className="md:w-1/4 px-1 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"> Add </label>
               <button 
                 className="shadow bg-teal hover:bg-teal-light text-white py-2 px-4 rounded-lg"
                 onClick={() => this.props.onAddDiscount(price, discount, salePrice, saving)}>
                   Add +
                </button>
            </div>
          </div>
      
          <DataDisplayer 
            salePrice={salePrice} 
            price={price.toString()} 
            discount={discount.toString()} 
            saving={saving}
          />
      </div>
    );
  }
}

Calculator.propTypes = {
 price:         PropTypes.string,
 onChangeInput: PropTypes.func.isRequired,
 onAddDiscount: PropTypes.func.isRequired
}

