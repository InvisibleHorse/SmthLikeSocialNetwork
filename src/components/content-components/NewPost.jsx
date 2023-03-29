import React from "react"
import {useRef} from "react"


const NewPost = (props) => {

console.log(props);

let ref = useRef();
let handleCLick = () =>{ 
    props.addPost()
}

let onPostChange = () =>{
    let text = ref.current.value;
    props.onChangeNewText(text);
}

    return (
        <div className="post-form">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Create new post</label>
                <textarea onChange={onPostChange} ref={ref} value={props.postText} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-auto submit-button">
                <button onClick={handleCLick} type="submit" class="btn btn-warning mb-3"><img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" /></button>
            </div>
        </div>
    )
}
export default NewPost; 