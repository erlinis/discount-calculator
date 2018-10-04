import React, { Component } from 'react';
import Calculator from './components/Calculator';
import DiscountList from './components/DiscountList';
import AddHomePopup from './components/AddHomePopup';
import { isIos, isInStandaloneMode } from './lib/appleDeviceDetector';

class App extends Component {
  constructor(props){
    super(props);
    this.priceInputRef = React.createRef();
    this.focusPriceInput = this.focusPriceInput.bind(this);

    this.state = {
      discounts: [],
      price: '',
      discount: 40,
      showInstallMessage: this.isAppleDevice() && !this.getInstallMessage()
    }
  }

  getInstallMessage = () => {
    const item = localStorage.getItem('@discount/installMessage');
    if(item === 'true') {
      return true
    }
    return false;
  }

  storeInstallMessage = () => {
    localStorage.setItem('@discount/installMessage', true);
  }

  isAppleDevice = () => isIos() && !isInStandaloneMode()

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
    }, this.clearInput(), this.focusPriceInput());
  }

  onDeleteDiscount = (itemId) => {
    this.setState({
      discounts: this.state.discounts.filter(item => item.id !== itemId)
    }, this.focusPriceInput());
  }

  clearInput() {
    this.setState({ price: ''});
  }

  focusPriceInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.priceInputRef.current.focus();
  }

  onPopupPress = (e) => {
    this.setState({
      showInstallMessage: false
    }, () => {
      this.storeInstallMessage();
    })
  }

  render() {
    return (
      <>
        <header className="App-header flex items-center justify-center">
          <h1 className="App-title">Discount Calculator</h1>
        </header>
        <div className="App-body">
          <div className="container">
          <Calculator
            price={this.state.price}
            priceInputRef={this.priceInputRef}
            discount={this.state.discount}
            onAddDiscount={this.onAddDiscount}
            onChangeInput={this.onChangeInput}/>
          <DiscountList
            discounts={this.state.discounts}
            onDeleteDiscount={this.onDeleteDiscount}/>
          </div>
          {
            this.state.showInstallMessage ? <AddHomePopup onPress={this.onPopupPress} /> : null
          }
        </div>
      </>
    );
  }
}

export default App;
