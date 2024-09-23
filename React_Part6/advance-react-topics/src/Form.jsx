import { useState } from "react"

export default function Form(){
    // let [fullName,setFullName] = useState("");
    // let [userName,setUserName] = useState("");
    // let changFullName = (event)=>{
    //     setFullName(event.target.value);
    // }
    // let changUserName = (event)=>{
    //     setUserName(event.target.value);
    // }
    // If we want to create multiple input tags then we will have to create state variable for each tag,and then for onChange event we'll have to write change function for each tag.So to prevent this we can do this as follows.
    let [formData,setFormData] = useState({fullName:"",userName:"",password:""});
    
    let handleFormChange = (event)=>{
        setFormData((prevData)=>{
            // Here we are composing event.target.name in a square bracket bcz here we don't know exact name of key to be changed so wehen we don't know exact name of a key and another name is present thiskey then we 
            return {...prevData,[event.target.name]:event.target.value};
            // Here event.target.name contains the name of kay to be chnaged of this object.And we have also added a name attribute in each input tag for this purpose of getting the key name of whome value is changed.And in this name attribute we have assigned name of that key which contians the input value of that input tag.
        })
    }
    let handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            userName:"",
            password:""
        })
        // here we are preventing default operation of forms and also setting the inner content of each input tag to be empty.
    }
    return(
        // As we know form in html contains some default behaviour in them.Like on submiting a form or when onChnage event of form is triggered we see that our page is refreshed by default and all the data of the page is vanished.This is due to default behaviour of form.But in many cases we don't want this default behaviour of forms.And we want to set these behaviour of form by ourself.We can do this in react.
        // The standard way with forms is to use Controlled Componenets.So we make react state to be the 'single source of truth'.
        // In HTML, form elements such as <input>,<txtarea> and <select> typically maintain their own state and update it based on user input.In react,muteable state is typically kept in the state property of components,and only updated with useSate().
        // We can combine the two by making the React state be the 'single source of truth'.Then the React component that renders a form also controls what happens in that form on subsequent user input.An input form element whose value is controlled by React in this way is called a 'controlled component'.  
        <form onSubmit={handleSubmit}>
            {/* In labels for is replaced by htmlFor in react */}
            <label htmlFor="fullName">Full Name : </label> 
            <input type="text" placeholder="Enter full name" value={formData.fullName} name="fullName" onChange={handleFormChange} id="fullName"/>
            <br />
            <label htmlFor="userName"> User Name : </label>
            <input type="text" placeholder="Enter user name" onChange={handleFormChange} id="userName" name="userName" value={formData.userName}/>
            <br /> 
            <label htmlFor="password">Pasword : </label>
            <input type="password" placeholder="Enter password" id="password" name="password" value={formData.password} onChange={handleFormChange} />
            <button>Submit</button>
        </form>
        
    )
}