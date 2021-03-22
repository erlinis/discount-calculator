import { useEffect, useRef, useState } from 'react'
import Calculator from './components/Calculator'
import DiscountList from './components/DiscountList'
import AddHomePopup from './components/AddHomePopup'
import { isIos, isInStandaloneMode } from './lib/appleDeviceDetector'

function App() {
  const priceInputRef = useRef()
  const [state, setState] = useState(() => {
    return {
      discounts: getDiscountList(),
      price: '',
      discount: 40,
      description: '',
      showInstallMessage: isAppleDevice() && !getInstallMessage(),
    }
  })

  function onChangeInput(event) {
    var field = event.target

    setState((prevState) => {
      return {
        ...prevState,
        [field.name]: field.value,
      }
    })
  }

  function onAddDiscount(price, discount, salePrice, saving, description) {
    var discountRow = {
      id: Date.now(),
      price: Number(price),
      discount: discount,
      saving: saving,
      salePrice: Number(salePrice),
      description: description,
    }

    setState((prevState) => {
      return {
        ...prevState,
        discounts: [discountRow, ...prevState.discounts],
        price: '',
        description: '',
      }
    })

    // this.setState(
    //   {
    //     discounts: [discountRow, ...this.state.discounts],
    //     price: '',
    //     description: '',
    //   },
    //   () => {
    //     this.focusPriceInput()
    //   }
    // )
  }

  function onDeleteDiscount(itemId) {
    setState((prevState) => {
      return {
        ...prevState,
        discounts: prevState.discounts.filter((item) => item.id !== itemId),
      }
    })

    // this.setState(
    //   {
    //     discounts: this.state.discounts.filter((item) => item.id !== itemId),
    //   },
    //   () => {
    //     this.focusPriceInput()
    //   }
    // )
  }

  var discounts = state.discounts

  useEffect(() => {
    storeDiscountList(discounts)
  }, [discounts])

  function focusPriceInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    priceInputRef.current.focus()
  }

  function onPopupPress(e) {
    setState((prevState) => {
      return {
        ...prevState,
        showInstallMessage: false,
      }
    })
  }

  useEffect(() => {
    if (state.showInstallMessage === false) {
      storeInstallMessage()
    }
  })

  return (
    <>
      <header className="banner">
        <picture className="logo">
          <source srcset="images/logo/ticket-logo-2x.png 2x, images/logo/ticket-logo-3x.png 3x" />
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
            price={state.price}
            description={state.description}
            priceInputRef={priceInputRef}
            discount={state.discount}
            onAddDiscount={onAddDiscount}
            onChangeInput={onChangeInput}
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
  )
}

function getInstallMessage() {
  const item = localStorage.getItem('@discount/installMessage')
  if (item === 'true') {
    return true
  }
  return false
}

function storeInstallMessage() {
  localStorage.setItem('@discount/installMessage', true)
}

function isAppleDevice() {
  return isIos() && !isInStandaloneMode()
}

function storeDiscountList(discounts) {
  localStorage.setItem('@discount/discountList', JSON.stringify(discounts))
}

function getDiscountList() {
  try {
    return JSON.parse(localStorage.getItem('@discount/discountList') || [])
  } catch (e) {
    return []
  }
}

export default App
