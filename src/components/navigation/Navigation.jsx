import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-medium.png";
//
//
function Navigation() {
    return (
       <nav>
             <div className="nav-container">
                 <h4><img className='nav-logo' src={logo} alt="logo medium"/></h4>

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
                             to="/alleposts">
                             Alle posts
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             className={({ isActive }) => isActive ? 'active-menu-link': 'default-menu-link'}
                            to="/nieuwePost">
                             Nieuwe post maken
                         </NavLink>
                     </li>
                 </ul>
             </div>
         </nav>
    );
}

export default Navigation