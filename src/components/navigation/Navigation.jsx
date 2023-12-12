import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>Blogventure</h4>

                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/blogs">
                            Alle blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/newblog">
                            Maak een nieuwe blog
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;