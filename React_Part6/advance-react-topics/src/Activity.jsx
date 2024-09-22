import { useState,useEffect } from "react";

export default function Activity(){
    let [joke,setJoke] = useState({});
    let URL= "https://official-joke-api.appspot.com/random_joke";

    let getJoke = async()=>{
        // Our API may take some time to respone we have to use await keyword with it.And we can only use await keyword inside an async function so we make our function as async.
        let respone = await fetch(URL);
        let jsonForm = await respone.json();
        // Returned data is in some other form so we have to convert it to json formte and it may also take some time so we use await keyword with it also.
        setJoke(
            // In json formate Our API returned data in object form in which a key named setup contains first part of joke and another key named punchline contains second part of joke.
            {firstLine:jsonForm.setup,secondLine:jsonForm.punchline}
        )
    }

    // At begining we know our joke variable is empty so nothing will display on page.So to display our first joke joke on page we can use useEffect hook and as dependencie pass an empty array whihc will make sure that our this useEffect function will be called only one.
    useEffect(()=>{
        // we can't make our function returned by seEffect as an async function.So if we want to use an async function then we can make an arrown function and then inside this arrow function create an async function and then call it function.
        async function firstJoke(){
        let response = await fetch(URL);
        let jsonForm = await response.json();
        setJoke(
            {firstLine:jsonForm.setup,secondLine:jsonForm.punchline}
        )
        }
    firstJoke();
    },[])
    // 
    return(
        <>
            <h1>Joker!</h1>
            <h3>{joke.firstLine}</h3>
            <h3>{joke.secondLine}</h3>
            <button onClick={getJoke}>Get a Joke</button>
        </>
    )

}