import React from "react"
import SingleFirendsListElement  from "./singleFirendsListElement"

const FriendsList = (props) => {

let listOfFirendsElements = props.friends.map(fr => <SingleFirendsListElement name={fr.name} id={fr.id} key={fr.key} img={fr.img}/>)

const quentity = Math.floor((Math.random()*6)+3);

return(
        <div className="row socialDistance">
            <h3>Friends: </h3>
            <p className="quentity">({quentity})</p>
            {listOfFirendsElements}
        </div>
)
}

export default FriendsList