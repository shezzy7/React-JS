// Whenever we use state in code and when re-rendering occurs.Our code executes again from top in simple/formal flow.

import { useState } from "react";

export default function ReRender(){
    console.log("Rendering occured");
    // Whenever h2 will be clicked incCount function be called and value of our state variable will be changed.As state's value will be changed it will re-render this componenet from top.We can it on console when we will click h2 then msg above in console.log 'rendering occured' will be printed for each time
    let [count,setCount] = useState(0);
    function incCount(){
        setCount(count+1);
        // And if we print value of count here on console then we will see that our message console.log("Rendering occured"); will be printed first on console and after it valyue of count will be printed , this is bcz as value of state changes it re-renders conponenet and then it executes furhter code if present inside it.This is how re-rendring works.
        console.log(count);
    } 

    return(
        <>
            <h2 onClick={incCount}>Count is {count}</h2>
        </>
    );
    
}