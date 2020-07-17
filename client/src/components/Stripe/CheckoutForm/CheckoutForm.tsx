import React, { Component } from 'react'
import "./CheckoutForm.scss"
import {CardElement} from '@stripe/react-stripe-js'
import axios from 'axios'

export default class CheckoutForm extends Component {

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {data: clientSecret} = await axios.post('/api/payment_intents', {
            amount: 2000
        })
    }

    render() {
        return (
            <form className="CheckoutForm" onSubmit={this.handleSubmit}>
                <CardElement
                    options = {{
                        hidePostalCode : true
                    }}
                />
                <input type="submit"/>
            </form>
        )
    }
}
