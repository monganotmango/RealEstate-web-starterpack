import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
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
                    <button className="button">
                        Login
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Header
