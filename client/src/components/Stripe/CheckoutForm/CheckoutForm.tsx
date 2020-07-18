import React from 'react'
import "./CheckoutForm.scss"

const CheckoutForm = () => {
    return (
        <form className="CheckoutForm">
            <input 
                type="text" 
                placeholder="Full Name" 
                className="CheckoutForm__input"
                name="fullName"
            />
            <input 
                type="text" 
                placeholder="Email" 
                className="CheckoutForm__input"
                name="email"
            />
            <input 
                type="text" 
                placeholder="Address" 
                className="CheckoutForm__input"
                name="email"
            />
            <input 
                type="text" 
                placeholder="Phone Number" 
                className="CheckoutForm__input"
                name="number"
            />
        </form>
    )
}

export default CheckoutForm