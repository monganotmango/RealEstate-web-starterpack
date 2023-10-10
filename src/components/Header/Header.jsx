import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import ProfileMenu from '../ProfileMenu/ProfileMenu'

const Header = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <NavLink to="/">
                    <img src="./logo.png" alt="logo" width={100} />
                </NavLink>
                <div className="flexCenter h-menu">
                    <NavLink to="/properties">Properties</NavLink>
                    <a href="mailto:mithravindanambiar2004@gmail.com">Contact</a>
                    {/*login button */}
                    {
                        !isAuthenticated ? (

                            <button className="button" onClick={loginWithRedirect}>
                                Login
                            </button>
                        ) : (
                            <ProfileMenu user={user} logout={logout} />
                        )

                    }

                </div>
            </div>
        </section>
    )
}

export default Header
