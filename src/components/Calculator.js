import PropTypes from 'prop-types'
import DataDisplayer from '../components/DataDisplayer'
import Label from '../components/Label'
import { calculateSalePrice, calculateSaving } from '../lib/discountCalculation'

export default function Calculator({
  price,
  discount,
  description,
  priceInputRef,
  onChangeInput,
  onAddDiscount,
}) {
  var saving = calculateSaving(price, discount)
  var salePrice = calculateSalePrice(price, saving)

  return (
    <div className="calculation-panel">
      <div className="box">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault()
            onAddDiscount(price, discount, salePrice, saving, description)
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
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
              <Label inputFor="price" text="Price" />
              <input
                className="input"
                type="number"
                id="price"
                name="price"
                min="1"
                max="1000000000000"
                required
                placeholder="0"
                ref={priceInputRef}
                onChange={onChangeInput}
                value={price}
              />
            </div>

            <div>
              <Label inputFor="discount" text="Discount %" />
              <input
                className="input"
                type="number"
                id="discount"
                name="discount"
                min="1"
                max="100"
                required
                onChange={onChangeInput}
                value={discount}
              />
            </div>

            <div className="col-span-2">
              <button className="button" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <DataDisplayer
        salePrice={salePrice}
        price={price.toString()}
        discount={discount.toString()}
        saving={saving}
        description={description}
      />
    </div>
  )
}

Calculator.propTypes = {
  price: PropTypes.string,
  description: PropTypes.string,
  priceInputRef: PropTypes.object,
  onChangeInput: PropTypes.func.isRequired,
  onAddDiscount: PropTypes.func.isRequired,
}
