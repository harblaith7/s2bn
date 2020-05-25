import React, { Component } from 'react'
import "./ContactChapter.scss"

export default class ContactChapter extends Component {
    render() {
        return (
            <div className = "ContactChapter">
                <div className="ContactChapter__container">
                    <h2 className="ContactChapter__header">
                        Contact Us
                    </h2>
                    <p className="ContactChapter__text">
                        You can contact the Guelph S2BN chapter by sending an email to <span>guelphs2bn@gmail.com </span>
                        or by messaging us on <a href="">LinkedIn</a>
                    </p>
                    <button className="ContactChapter__register-btn">
                        Register for our next event today!
                    </button>
                </div>
            </div>
        )
    }
}
