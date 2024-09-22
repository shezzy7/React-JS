import { useState,useEffect } from "react"
export default function UseHookEffect(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);
    let incCountx = ()=>{
        setCountx(countx+1);
    }
    let incCounty = ()=>{
        setCounty(county+1);
    }
    // The Effect hook lets you perform side effects in function components.
    // Like Data fetching,setting up a subscription, and manually chnaging the DOM in react components are all example of side effects.
    // syntax -> useEffect(function funName(){
    //            function body
    //             },dependencies)
    // Here dependencies can be state variables on chnaging of which we want to call our useEffect function.For example if we have to state variables(x and y).And we want that whenever our x variables value is changed this function should be called then we can pass this x as our dependencie in square brackets like [x] , and vice versa but if we want to call this function each time whenever our componenet re-renders then we don't need to pass any dependencie.
    // If we want that our this useEffect function should be called for thr first time only whne our componenet renders then we can pass an empty array as our dependencie. 
    useEffect(function printSomething(){
        console.log("Side effect called");
    },[county])
    return (
        <div>
            <p>Countx is {countx}</p>
            <button onClick={incCountx}>+1</button>
            <p>County is {county}</p>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}