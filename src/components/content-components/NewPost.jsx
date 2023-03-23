import React from "react"

const NewPost = () => {
    return (
        <div className="post-form">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Create new post</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-auto submit-button">
                <button type="submit" class="btn btn-warning mb-3"><img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" /></button>
            </div>
        </div>
    )
}
export default NewPost; 