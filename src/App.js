import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import DiscountList from './components/DiscountList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      discounts: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Discount Calculator</h1>
        </header>
        <div className="App-body">
          <Calculator />
          <DiscountList />
        </div>
      </div>
    );
  }
}

export default App;
