import React from 'react'
import {Link} from "react-router-dom"

import "./header.css"

const Header = () => {
    return (
        <header className="headerContainer">
            <Link className="headerContainer__link" to="/">Home</Link>
            <Link className="headerContainer__link" to="/todos">Todos</Link>
            <Link className="headerContainer__link" to="/Settings">Settings</Link>
            <Link className="headerContainer__link" to="/logout">Logout</Link>
        </header>
    )
}

export default Header
