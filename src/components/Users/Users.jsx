import React from "react"
import s from "./Users.module.css"
import { connect } from "react-redux";
import UsersList from "./users-components/UsersList";


const mapStateToProps = (state) => {
    return { users: state.usersPage.usersListarray };
};

const Users = (props) => {

    return (
        <div>
            <div className={`${s.userPlate} ${s.mainOne} bg-light border rounded-3`}>
                <UsersList users={props.users} />
                <div className={`${s.showMore}`}>
                    <button className={`btn btn-success rounded-pill px-3`}>Show more</button>
                </div>
            </div>
        </div>)

}

export default connect(mapStateToProps)(Users);