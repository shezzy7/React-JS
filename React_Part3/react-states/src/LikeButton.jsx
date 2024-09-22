//in this activity we are going to build a like button 

import {useState} from "react";

export default function LikeButton(){
    let [isLiked,setiSLiked] = useState(false);
    // we can create as many state variables as many we want.

    let toggleLike =()=>{
        setiSLiked(!isLiked);
    }
    
    return(
        <div>
            <h1 onClick={toggleLike} >
            { isLiked? 
            (<i className="fa-solid fa-heart" style={{color:"yellow"}}></i>):
            (<i className="fa-regular fa-heart"></i>)
            }
            </h1>
        </div>
    );

}