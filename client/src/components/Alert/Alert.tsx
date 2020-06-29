import React, { Component } from 'react'
import "./Alert.scss";
import {connect} from 'react-redux'

interface IProps {
    alert: string,
    alertType: number,
    alertStyle?: string
}

class Alert extends Component<IProps> {
    render() {
        const {alert} = this.props
        return (
            <div className="Alert">
                {this.props.alertType === 1 ? (
                    <div className="Alert__container">
                        <h2 className="Alert__message">
                            We got a problem
                        </h2>
                        <h4 className="Alert__custom-message">
                            {alert}
                        </h4>
                    </div>
                ) : (
                    <div className="Alert__container2">
                        {this.props.alertStyle === 'success' ? (
                            <h2 className="Alert__message" style={{color: 'green'}}>
                                {alert}
                            </h2>
                        ): (
                            <h2 className="Alert__message">
                                {alert}
                            </h2>
                        )}
                        
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    alert: state.alert
})


export default connect(mapStateToProps)(Alert)