import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import Displayer from '../components/Displayer';
import Label from '../components/Label';
import {
  calculateSalePrice,
  calculateSaving,
} from '../lib/discountCalculation';

const initialState = { price: '', discount: 5, amount: 1, description: '' };

export default function Calculator({ priceInputRef, onAddDiscount }) {
  const [{ price, discount, description, amount }, setState] = useState(() => {
    return initialState;
  });
  var saving = calculateSaving(price, discount);
  var salePrice = calculateSalePrice(price, amount, saving);

  const onChangeInput = useCallback(function onChangeInput(event) {
    var field = event.target;

    setState((prevState) => {
      return {
        ...prevState,
        [field.name]: field.value,
      };
    });
  }, []);

  return (
    <div className="calculation-panel">
      <div className="box">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            onAddDiscount(
              price,
              amount,
              discount,
              salePrice,
              saving,
              description
            );
            setState((initial) => {
              return {
                ...initial,
                price: '',
                description: '',
              };
            });
          }}
        >
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <Label inputFor="description" text="Description" />
              <input
                className="input"
                type="text"
                id="description"
                name="description"
                max="100"
                onChange={onChangeInput}
                value={description}
              />
            </div>

            <div>
              <Label inputFor="amount" text="Units" />
              <input
                className="input"
                placeholder="1"
                type="number"
                id="amount"
                name="amount"
                min="0"
                max="100"
                required
                onChange={onChangeInput}
                value={amount}
              />
            </div>

            <div className="grid grid-cols-5 gap-3 col-span-4">
              <div className="col-span-3">
                <Label inputFor="price" text="Price" />
                <input
                  className="input"
                  type="number"
                  id="price"
                  name="price"
                  min="0.1"
                  max="1000000000000"
                  step="0.001"
                  required
                  placeholder="0.00"
                  ref={priceInputRef}
                  onChange={onChangeInput}
                  value={price}
                />
              </div>

              <div className="col-span-2">
                <Label inputFor="discount" text="Discount %" />
                <input
                  className="input"
                  type="number"
                  id="discount"
                  name="discount"
                  min="0"
                  max="100"
                  required
                  onChange={onChangeInput}
                  value={discount}
                />
              </div>
            </div>

            <div className="col-span-4">
              <button className="button" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <Displayer
        salePrice={salePrice}
        price={price.toString()}
        discount={discount.toString()}
        saving={saving}
        description={description}
      />
    </div>
  );
}

Calculator.propTypes = {
  priceInputRef: PropTypes.object,
  onAddDiscount: PropTypes.func.isRequired,
};
