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
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (props.users.length === 0) {
        axios
            .get(`http://localhost:3001/users/0/${limit}`)
            .then((res) => {
                props.setUsers(res.data)
            })
            .catch((err) => console.error(err));
        }
    }, [props.users]);

    const loadMore = () => {
        axios
            .get(`http://localhost:3001/users/${page}/${limit}`)
            .then((res) => {
                props.setUsers(res.data)
            })
            .catch((err) => console.error(err));
        setPage(page + 1);
    };


    return (
        <div>
            <div className={`${s.userPlate} ${s.mainOne} bg-light border rounded-3`}>
                <UsersList users={props.users} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} />
                <div className={`${s.showMore}`}>
                    <button className={`btn btn-success rounded-pill px-3`} onClick={loadMore}>Show more</button>
                </div>
            </div>
        </div>)

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);