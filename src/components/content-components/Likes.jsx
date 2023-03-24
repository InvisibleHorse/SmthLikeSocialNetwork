import React, {useState} from "react";

const Likes = () => {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    return (
        <div className="likes-div">
        <p className="likes-count" >{count}</p> <button className="likes-button" onClick={increase}><img className="like" src="https://cdn-icons-png.flaticon.com/512/739/739282.png" /></button>
        </div>
    )
}

export default Likes;
