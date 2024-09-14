import {useState} from "react";
export default function Callback(){
    let [click,setClick] = useState(0);
    function incCount(){
        // setClick(click+1);
        // setClick(click+1);
        // setClick(click+1);
         {/* now if we click on our count button then it will not our count by 2 this is bcz setClick method works asynchronously.And when button is cliked and this incCount function is called and as our code hit first statement 'setClick(click+1)' then it stop further executing and start re-rendering components and next portion of code remains unexecuted.And count will only be increased by 1. */}
        
        // but if we use callbacks in our updater function(setClick) then it will execute all the functions and give us predicted results.
        setClick((prevVal)=>{
            return prevVal+1;
        });
        setClick((prevVal)=>{
            return prevVal+1;
        })
        // Here both statements will be executed and then final value of count will be increased by 2 each time we click button.
    }
    return(
        <>
            <button onClick={incCount}>Count {click}</button>
        </>
    );
}