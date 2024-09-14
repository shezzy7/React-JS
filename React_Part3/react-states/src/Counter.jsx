// We have to import hook from react to use it.And we'll only use useState hook now so we'll import this one only.
import {useState} from "react";
export default function Counter(){
    // For using state we make a variable as our state variable like count here(we only make that variable a state variable on changing of which we want to re-render our componenets.).Alongside this variable we write another function alongside with this state variable which will update the value of our state variable and will re-render our componenets.We write its name as-> setStateVariale.Like count is our state variable and setCount is our function.And then in useState function we pass the initial value of our state Variable.Like here we are initialising count by 0. 
    let [count,setCount]= useState(0);
    function incCount(){
        setCount(count+1);
        // To update our state variable's value we pass new value  to reRendring function.Like here setCount is our re-rendring function and we want to increase our count var by 1.
    }

    return(
        <div>
            <button onClick={incCount}>Count = {count}</button>
            {/* When we will press our 'increase count' button then it will increase the value of variable count by 1.But this change will not changes to our UI where value of count is already displayed 0.As we now there is no statement that is executing the h2 tag again.So to do this to render our this component again when some changes are maded to our code we use 'states'.
            "The state is a built-in React object that is used to contain or store information about the component.A component's state change over time;whenever it changes,component re-renders."*/}
            {/* Our props are immuteable,we cannot make chnages to our props so changes made to our props would not re-render our components,our components will be only re-rendered if any changes are maded to our states.Basically state is a variable of object type whichs tores data of compoenents so when we make any change to our component,it will change our state and whenever our state will change,it will re-render our componeents and our page will be updated. */}
        </div>
    );
}