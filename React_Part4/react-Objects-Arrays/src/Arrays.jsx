import { useState } from "react";

export default function Arrays(){
    // We can use arrays as state variables.And like objects we also need to spread arrays while adding any value in them.
    // Note : For adding values in array in react avoid methods like push,unshift and use methods like spread,concat.
    let [arr,setArr] = useState(["no moves"]);
    function addVal(){
        setArr((arr)=>{
            return [...arr,"new moves"];
        })
    }
    return(
        <>
            <p>{arr}</p>
            <button onClick={addVal}>Add vlaues to arrays</button>
        </>
    );

    
}