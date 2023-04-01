import React, { useEffect } from "react"
import s from "./Users.module.css"
import { connect } from "react-redux";
import UsersList from "./users-components/UsersList";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";


const usersArray = [
    {
        id: 1,
        key: 1,

        name: "Me",
        img: "https://wtamu.edu/~cbaird/sq/images/dog2.jpg",
        from: "Somewhere",
        born: "10.02.2000",
        career: "Artist"
    },
    {
        id: 2,
        key: 2,
        name: "Myself",
        img: "https://www.petmd.com/sites/default/files/happy-dog-body-language-2_0.jpg",
        from: "Ternopil",
        born: "11.09.1909",
        career: "Blogger"
    },
    {
        id: 3,
        key: 3,
        name: "I",
        img: "https://microbewiki.kenyon.edu/images/thumb/9/98/PuppyDogEyes.jpg/200px-PuppyDogEyes.jpg",
        from: "Kyiv",
        born: "06.03.2000",
        career: "Hooker"
    },
    {
        id: 4,
        key: 4,
        name: "Onyx",
        img: "https://lh3.googleusercontent.com/rrPybt0R6FnV8MVkc0jZX6-8-JxTboZvE1WWiS2S1zxmUarym13nMw5UbtrDJKaybTGTVTOgDdcKG4FGP355v3VsDZcb_j8BBTYFp5kZ",
        from: "Darmstadt",
        born: "10.05.2022",
        career: "Cute boy"
    },
    {
        id: 5,
        key: 5,
        name: "Huesos",
        img: "https://awscape.org.za/wp-content/uploads/2018/05/dog-200x200.jpg",
        from: "Frankfurt",
        born: "14.09.1999",
        career: "Doctor"

    }

];


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
    useEffect(() => {
        console.log('here')
        props.setUsers(usersArray)
    }, [0])

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