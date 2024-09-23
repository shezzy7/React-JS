import { useState } from "react";

export default function Ptc(){
    let [formData,setFormData] = useState({username:"",fullname:"",password:""});
   
    let handleChnage = (event)=>{

        setFormData(
             {...formData,[event.target.name]:event.target.value
            }
        )
    }
    
    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData(
            {username:"",fullname:"",password:""}
        )
    }
    return(
        <>
            <form >
                <input type="text" placeholder="username" value={formData.username} onChange={handleChnage} name="username"/>
                <br />
                <input type="text" placeholder="fullname" name="fullname" value={formData.fullname} onChange={handleChnage}/>
                <br />
                <input type="password" placeholder="pasword" name="password" value={formData.password} onChange={handleChnage}/>
                <br />

                <button type="submit" onClick={handleSubmit} >Submit</button>

            </form>
        </>
    )
}