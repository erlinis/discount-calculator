import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import DiscountList from './components/DiscountList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      discounts: [],
      price: '',
      discount: 40
    }
  }

  onChangeInput = (event) => {
    var field = event.target;
    /* console.log(`<${field.name}>: `, field.value); */

    this.setState({ [field.name]: field.value });
  }

  onAddDiscount = (price, discount, salePrice, saving) => {
    var discountRow = {
      id: Date.now(),
      price: Number(price),
      discount: discount,
      saving: saving,
      salePrice: Number(salePrice)
    }

    this.setState({
      discounts: [ discountRow, ...this.state.discounts ]
    }, this.clearInput());
  }

  onDeleteDiscount = (itemId) => {
    this.setState({
      discounts: this.state.discounts.filter(item => item.id !== itemId)
    });
  }

  clearInput() {
    this.setState({ price: ''});
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Discount Calculator</h1>
        </header>
        <div className="App-body">
          <Calculator
            price={this.state.price}
            discount={this.state.discount}
            onAddDiscount={this.onAddDiscount}
            onChangeInput={this.onChangeInput}/>
          <DiscountList 
            discounts={this.state.discounts}
            onDeleteDiscount={this.onDeleteDiscount}/>
        </div>
      </div>
    );
  }
}

export default App;
