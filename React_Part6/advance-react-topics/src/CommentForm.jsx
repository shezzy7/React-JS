import { useState } from "react"
import "./CommentForm.css";
export default function CommentForm() {
    let [formData,setFormData] = useState({username:"",remarks:"",rating:0}) ;

    let handleFormChange = (event)=>{
        setFormData((prevData)=>{
            return {...prevData , [event.target.name]:event.target.value}
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        addRemarks();
        setFormData(
            {username:"",remarks:"",rating:0}
        )
    }
    let addRemarks = ()=>{
        let oneCom = document.createElement('div');

        let commentForm = document.querySelector('.comment');
        let h3 = document.createElement('h3');
        h3.innerText = formData.username;
        oneCom.append(h3);
        let p = document.createElement('p');
        p.innerText=formData.remarks;
        oneCom.append(p);
        let p2 = document.createElement('p');
        p2.innerText=formData.rating;
       oneCom.append(p2);
       oneCom.style.border='1px solid aqua';
       commentForm.append(oneCom);
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
            <br />
            <div className="comment">
                <h2>Comments</h2>
                <br />

            </div>
        </div>
    )
}
