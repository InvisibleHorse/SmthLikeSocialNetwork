import React from "react"
import { NavLink } from "react-router-dom";
import s from "../Users.module.css";


const UserContainer = (props) => {

const followState = () => {
    props.followed ? props.unfollow(props.id) : props.follow(props.id)
}

    return (
        <div className={`${s.uGrid} ${s.elementsAlign} bg-light border`}>
            <div className={`${s.img}`}>
                <img className={`${s.imgStyle}`} src={props.img} alt="Generic placeholder image" />
                <NavLink to={'/users/' + props.id} className="nav-link"><button onClick={followState} className={`btn btn-success rounded-pill px-3`}>{props.followed ? 'Unfollow' : 'Follow'}</button></NavLink>
            </div>
            <div className={`${s.everythingAtOnce}`}>
                <div>
                    <h4 className={`${s.forH4}`}>{props.name}</h4>
                    <p className={`${s.p}`}><span className={`${s.title} ${s.p}`}>Born:  </span>{props.born}</p>
                    <p className={`${s.p}`}><span className={`${s.title} ${s.p}`}>Career:  </span>{props.career}</p>
                </div>
            </div>
            <div className={`${s.info}`}>
                <p className={`${s.title} ${s.p}`}>From:</p>
                <p className={`${s.p}`}>{props.from}</p>
            </div>
        </div >
    )
}
export default UserContainer; 