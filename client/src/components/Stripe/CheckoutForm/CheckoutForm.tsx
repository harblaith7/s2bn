import React from 'react'
import "./CheckoutForm.scss"
import {CardElement} from "@stripe/react-stripe-js"

const CheckoutForm = () => {
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
            <CardElement
                options={{
                    hidePostalCode: true
                }}
            />
            <button type="submit" className="CheckoutForm__btn">
                Pay
            </button>
        </form>
    )
}

export default CheckoutForm