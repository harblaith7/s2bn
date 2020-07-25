import React, { Component } from 'react'
import "./Nav.scss"
import s2bn from "../../assets/images/svg/s2bn.svg"
import {Link, Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import {loadUser} from '../../redux/actions/auth'
import setAuthToken from '../../utils/setAuthToken'

interface IProps {
    user: {
        firstName: string,
        lastName: string,
        email: string
    },
    loadUser: () => void
}

class Nav extends Component<IProps> {

    handleClick: () => void = () => {
        localStorage.removeItem('token');
        setAuthToken(undefined)
        this.props.loadUser()
    }
    
    render() {
        const {user} = this.props
        return (
            <nav className = "Nav">
               <ul className="Nav__list">
                   {!user && (
                       <>
                        <li className="Nav__list-item">
                            <Link to="/" className="Nav__link">
                                <img src={s2bn} alt="" className="Nav__logo"/>
                            </Link>
                         </li>
                        <li className="Nav__list-item Nav__list-item--right">
                            <Link to="/about" className="Nav__link">
                                About
                            </Link>
                        </li>
                        <li className="Nav__list-item">
                            <Link to="/chapters/guelph" className="Nav__link">
                                Chapters
                            </Link>
                        </li>
                        <li className="Nav__list-item">
                            <Link to="/events" className="Nav__link">
                                Events
                            </Link>
                        </li>
                        <li className="Nav__list-item">
                            <a href="" className="Nav__link">
                                Sponsorship
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <Link to="/contact" className="Nav__link">
                                Contact
                            </Link>
                        </li>
                   </>
                   )} 
                   {
                       user && (
                           <>
                           <li className="Nav__list-item Nav__list-item--right">
                                <Link to="/dashboard" className="Nav__link">
                                        Dashboard
                                </Link>
                            </li>
                            <li className="Nav__list-item">
                                <Link to="/messages" className="Nav__link">
                                        Messages
                                </Link>
                            </li>
                            <li className="Nav__list-item">
                                <Link to="/create-events" className="Nav__link">
                                        Events
                                </Link>
                            </li>
                            <li className="Nav__list-item">
                                <Link className="Nav__link" onClick={this.handleClick}>
                                    Logout
                                </Link>
                            </li>
                            </>
                       )
                   }
               </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.auth.user
})


export default connect(mapStateToProps, {loadUser})(Nav)
