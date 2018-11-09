import React, { Component } from 'react';

export default class PriceInput extends Component {

  render() {
    return (
      <input
         className="input appearance-none block w-full bg-grey-white text-grey-darkest text-lg border border-grey-light shadow rounded py-3 px-3"
         type="number"
         id="price"
         name="price"
         min="1"
         max="1000000000000"
         placeholder="0"
         autoFocus
         ref={this.props.priceInputRef}
         onChange={this.props.onChange}
         value={this.props.value}/>
      )
  }
}

