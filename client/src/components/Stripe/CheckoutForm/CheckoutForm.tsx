import React, {useState} from 'react'
import "./CheckoutForm.scss"
import {CardElement, useElements} from "@stripe/react-stripe-js"
import {StripeCardElementChangeEvent} from "@stripe/stripe-js"


const CheckoutForm = () => {

    const [checkoutError, setCheckoutError] = useState("")

    const handleCardDetailChange = (e: StripeCardElementChangeEvent) => {
        if(e.error){
            return setCheckoutError(e.error.message)
        } 
        setCheckoutError("")
    }

    return (
        <form className="CheckoutForm">
            <input 
                type="text" 
                placeholder="Full Name" 
                className="CheckoutForm__input"
                name="fullName"
                required
            />
            <input 
                type="text" 
                placeholder="Email" 
                className="CheckoutForm__input"
                name="email"
                required
            />
            <input 
                type="text" 
                placeholder="Address" 
                className="CheckoutForm__input"
                name="email"
                required
            />
            <input 
                type="text" 
                placeholder="Phone Number" 
                className="CheckoutForm__input"
                name="number"
                required
            />
            <div className="CheckoutForm__error-container">
             {checkoutError && <p>{checkoutError}</p>}
            </div>
            <CardElement
                options={{
                    hidePostalCode: true
                }}
                onChange={handleCardDetailChange}
            />
            <button type="submit" className="CheckoutForm__btn">
                Pay
            </button>
        </form>
    )
}

export default CheckoutForm