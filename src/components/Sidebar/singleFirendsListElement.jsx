import React from "react"

const SingleFirendsListElement = (props) =>{
    return(
        <div class="col-lg-4">
        <img class="rounded-circle" src={props.img} alt="Generic placeholder image" width="45rem" height="45rem" />
        <p>{props.name}</p>
      </div>
    )
}

export default SingleFirendsListElement 
