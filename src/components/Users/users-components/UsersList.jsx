import React from "react"
import UserContainer from "./User-container";
import s from "../Users.module.css";

const UsersList = (props) => {

    let usersListElements = props.users.map(u => <UserContainer name={u.name} id={u.id} key={u.key} img={u.img} from={u.from} born={u.born} career={u.career}/>)

return(
        <div>
            <h3 className={`${s.forH3}`}>Users: </h3>
            {usersListElements}
        </div>
)
}

export default UsersList


