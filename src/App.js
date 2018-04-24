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
    console.log(`<${field.name}>: `, field.value);

    this.setState({ [field.name]: field.value });
  }

  onAddDiscount = (price, discount, salePrice, saving) => {
    var discountRow = {
      id: Date.now(),
      price: price,
      discount: discount,
      saving: saving,
      salePrice: salePrice
    }

    this.setState({
      discounts: [ discountRow, ...this.state.discounts ]
    }, clearInput());
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
          <DiscountList discounts={this.state.discounts}/>
        </div>
      </div>
    );
  }
}

export default App;
