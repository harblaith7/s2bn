import React, {useState} from 'react'
import "./CheckoutForm.scss"
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {StripeCardElementChangeEvent} from "@stripe/stripe-js"
import axios from 'axios'

const CheckoutForm = (props: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    price: Number
}) => {

    let initialButtonName;

    if(props.price <= 0) {
        initialButtonName = "Register Now"
    } else {
        initialButtonName = `Pay $${props.price}`
    }

    const [checkoutError, setCheckoutError] = useState("")
    const [processingPayment, setProcessingPayment] = useState(false)
    const [buttonName, setButtonName] = useState(initialButtonName)

    

    const element = useElements()
    const stripe = useStripe()

    const handleCardDetailChange = (e: StripeCardElementChangeEvent) => {
        if(e.error){
            return setCheckoutError(e.error.message)
        } 
        setCheckoutError("")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Get billing info
        const event = e
        const billingInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.number.value
        }

        if(props.price <= 0){
            setTimeout(() => {
                setButtonName(`Success! Registered`)
            }, 2000)
            setTimeout(() => {
                props.setOpen(false)
                return
            }, 3000)
        }

        // Disable button 
        setProcessingPayment(true)
        setButtonName("Processing...")

        const cardElement = element!.getElement("card");

        try {
            const { data: clientSecret } = await axios.post(
                "http://localhost:5000/api/payments",
                 {amount: (100 * props.price)}
            )

            // Create payment method
            const paymentMethod = await stripe!.createPaymentMethod({
                type: "card",
                card: cardElement!,
                billing_details: billingInfo
            })

            console.log(paymentMethod)

            if(paymentMethod.error){
                setCheckoutError(paymentMethod.error.message!)
                setProcessingPayment(false);
                return
            }

            // Complete the payment
            const completePayment = await stripe?.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.paymentMethod!.id
            })

            if(completePayment!.error){
                setCheckoutError(completePayment!.error.message!)
                setProcessingPayment(false);
                setButtonName(`Pay $${props.price}`)
                return
            }

            // Success message and clear inputs 
            setButtonName("Success! Payment Complete")

            console.log(event)

            setTimeout(() => {
                props.setOpen(false)
            }, 2000)

        } catch (error) {
            setCheckoutError(error.message);
        }
    }

    return (
        <form className="CheckoutForm" onSubmit={handleSubmit}> 
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
                placeholder="Phone Number" 
                className="CheckoutForm__input"
                name="number"
                required
            />
            <div className="CheckoutForm__error-container">
             {checkoutError && <p>{checkoutError}</p>}
            </div>
            {props.price > 0 && (
                <CardElement
                    options={{
                        hidePostalCode: true
                    }}
                    onChange={handleCardDetailChange}
                />
            )}
            <button type="submit" className="CheckoutForm__btn" disabled={processingPayment}>
                {buttonName}
            </button>
        </form>
    )
}

export default CheckoutForm