import React from "react";
import {v4 as uuid} from "uuid";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({dogs}){

    return (
        <nav>
            <NavLink exact to='/dogs'> All Dogs </NavLink>
            {dogs.map(dg => (
                <NavLink to={`/dogs/${dg.name.toLowerCase()}`}
                         key={uuid()}
                         exact>
                    {dg.name}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavBar;
