import React, { useEffect, useState } from "react"
import s from "./Users.module.css"
import { connect } from "react-redux";
import UsersList from "./users-components/UsersList";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import axios from "axios"




const mapStateToProps = (state) => {
    return { users: state.usersPage.users };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const Users = (props) => { 
    useEffect(() =>{
        axios
            .get('http://localhost:3001/users/')
            .then((res) => {
                props.setUsers(res.data)
            })
            .catch((err) => console.error(err));
    }, []);


    return (
        <div>
            <div className={`${s.userPlate} ${s.mainOne} bg-light border rounded-3`}>
                <UsersList users={props.users} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} />
                <div className={`${s.showMore}`}>
                    <button className={`btn btn-success rounded-pill px-3`}>Show more</button>
                </div>
            </div>
        </div>)

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);