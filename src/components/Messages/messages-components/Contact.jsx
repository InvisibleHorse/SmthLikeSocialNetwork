import React from "react"
import { NavLink } from "react-router-dom"

const Contact = (props) => {
    return (
        <li className="list-group-item">
            <NavLink to={'/messages/' + props.id} className="nav-link">{props.contactName}</NavLink>
        </li>
    )
}

export default Contact