import {useState} from "react";

function init(){
    console.log("init called");
    return Math.random();
}
export default function MoreAboutState(){

    // One
    // let [count,setCount] = useState(0);
    console.log("Componenet rendered");
    // A component is re-rendered when a change is detected in state variable only.Here we set value of state variable 0.And on clicking h1 we are passing 12 as new value of state variable.And now its value become 12.So there occurs a change in state variable and our componenet will be re-rendered.If we click our h1 again ,then we know that again we are passing 12 as new value of state variable.As our state variable already have value equall to 12 so there is no change in it.In result it will not re-render our compoenent.We can see it on our console that the msg 'Component rendered' will be only twice on console.


    // Two
    let [count,setCount] = useState(init);{/* We can also pass a function in useState to initialize our state variable through a function.But we'll not add small paranthesis '()' with its name.This is bcz as our componenet will be re-rendered this function will be executed automaticallly each time.To prevent this thing we just pass its name in useState.And it executes it there by itself.  */}
    function inCount(){
        // One
        // setCount(12);

        // Two
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }
    return(
        <>
            <h1 onClick={inCount}>Count = {count}</h1>
        </>
    );
}