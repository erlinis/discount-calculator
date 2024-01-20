import { useEffect, useRef, useState } from 'react';
import AddHomePopup from './components/AddHomePopup';
import Calculator from './components/Calculator';
import DiscountList from './components/DiscountList';
import { isInStandaloneMode, isIos } from './lib/appleDeviceDetector';

function App() {
  const priceInputRef = useRef();
  const [state, setState] = useState(() => {
    return {
      discounts: getDiscountList(),
      showInstallMessage: isAppleDevice() && !getInstallMessage(),
    };
  });

  /**
   *
   * @param {number} price
   * @param {number} amount
   * @param {string} discount
   * @param {number} salePrice
   * @param {string} saving
   * @param {string} description
   */
  function onAddDiscount(
    price,
    amount,
    discount,
    salePrice,
    saving,
    description
  ) {
    var discountRow = {
      id: Date.now(),
      price: Number(price),
      amount: Number(amount),
      discount: discount,
      saving: saving,
      salePrice: Number(salePrice),
      description: description,
    };

    setState((prevState) => {
      return {
        ...prevState,
        discounts: [discountRow, ...prevState.discounts],
      };
    });
  }

  function onDeleteDiscount(itemId) {
    setState((prevState) => {
      return {
        ...prevState,
        discounts: prevState.discounts.filter((item) => item.id !== itemId),
      };
    });
  }

  var discounts = state.discounts;

  useEffect(() => {
    storeDiscountList(discounts);
  }, [discounts]);

  function focusPriceInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    priceInputRef.current.focus();
  }

  function onPopupPress(e) {
    setState((prevState) => {
      return {
        ...prevState,
        showInstallMessage: false,
      };
    });
  }

  useEffect(() => {
    if (state.showInstallMessage === false) {
      storeInstallMessage();
    }
  });

  return (
    <>
      <header className="banner">
        <picture className="logo">
          <source srcSet="images/logo/ticket-logo-2x.png 2x, images/logo/ticket-logo-3x.png 3x" />
          <img
            src="images/logo/ticket-logo-1x.png"
            alt="logo"
            width="50"
            height="32"
          />
        </picture>
        <h1 className="text-2xl font-bold">Discount Calculator</h1>
      </header>
      <div className="container-wrapper">
        <div className="">
          <Calculator
            priceInputRef={priceInputRef}
            onAddDiscount={onAddDiscount}
          />
          <DiscountList
            discounts={state.discounts}
            onDeleteDiscount={onDeleteDiscount}
          />
        </div>
        {state.showInstallMessage ? (
          <AddHomePopup onPress={onPopupPress} />
        ) : null}
      </div>
    </>
  );
}

function getInstallMessage() {
  const item = localStorage.getItem('@discount/installMessage');
  if (item === 'true') {
    return true;
  }
  return false;
}

function storeInstallMessage() {
  localStorage.setItem('@discount/installMessage', true);
}

function isAppleDevice() {
  return isIos() && !isInStandaloneMode();
}

function storeDiscountList(discounts) {
  localStorage.setItem('@discount/discountList', JSON.stringify(discounts));
}

function getDiscountList() {
  try {
    return JSON.parse(localStorage.getItem('@discount/discountList') || []);
  } catch (e) {
    return [];
  }
}

export default App;
