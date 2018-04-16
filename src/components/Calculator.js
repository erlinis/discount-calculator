import React, { Component } from 'react';
import DataDisplayer from '../components/DataDisplayer';

class Calculator extends Component {
   constructor(props){
     super(props);

     this.state = {
      price: '',
      discount: 40,
      salePrice: 0,
      saving: 0
     };
   }

  onChangeInput = (event) => {
    var field = event.target;
    console.log(`<${field.name}>: `, field.value);

    this.setState({
      [field.name]: field.value
    }, () => {
      this.calculate_discount();
    });
  }

  calculate_discount(){
    var price = this.state.price;
    var discount = this.state.discount;
    var saving = price * (discount / 100);
    var salePrice = price - saving;

    this.setState({saving, salePrice});
  }

  render(){
    return(
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>Original price: </label>
            <input
              type="number"
              name="price"
              placeholder="0"
              onChange={this.onChangeInput}
              value={this.state.price}/>
          </div>

          <div className="form-group">
           <label>Discount %: </label>
           <input
             type="number"
             name="discount"
             min="1"
             max="1000"
             onChange={ e => this.onChangeInput(e)}
             value={this.state.discount}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <DataDisplayer
              label="Sale Price"
              styleClass="sale-price"
              data={this.state.salePrice.toString()}/>
          </div>

          <div className="form-group">
            <DataDisplayer
              label="Saving"
              styleClass="saving"
              data={this.state.saving.toString()}/>
          </div>

          <div className="form-group">
            <button> + Add </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;
