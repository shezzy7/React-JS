import { useState } from "react"

export default function CommentForm() {
    let [formData,setFormData] = useState({username:"",remarks:"",rating:0}) ;

    let handleFormChange = (event)=>{
        setFormData((prevData)=>{
            return {...prevData , [event.target.name]:event.target.value}
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData(
            {username:"",remarks:"",rating:0}
        )
        alert("Thanks for your remarks!");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name : </label>
                <input type="text" placeholder="username" id="userName" value={formData.username} name="username" onChange={handleFormChange}/>
                <br /> <br />
                <label htmlFor="Remakrs">Add remarks : </label>
                <textarea value={formData.remarks} id="Remarks" name="remarks" placeholder="Remarks here " onChange={handleFormChange}>Remarks here</textarea>
                <br /> <br />
                <label htmlFor="Rating">Ratings : </label>
                <input type="number" name="rating" id="Rating" placeholder="rating" min={1} max={5} style={{ padding: "10px" }} onChange={handleFormChange} value={formData.rating} />
                <br /> <br />
                <button>Add comment</button>
            </form>
            
        </div>
    )
}
