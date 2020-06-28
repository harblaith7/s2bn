import React, { Component } from 'react'
import "./Alert.scss";
import {connect} from 'react-redux'

interface IProps {
    alert: string
}

class Alert extends Component<IProps> {
    render() {
        const {alert} = this.props
        return (
            <div className="Alert">
                <div className="Alert__container">
                    <h2 className="Alert__message">
                        We got a problem
                    </h2>
                    <h4 className="Alert__custom-message">
                        {alert}
                    </h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    alert: state.alert
})


export default connect(mapStateToProps)(Alert)