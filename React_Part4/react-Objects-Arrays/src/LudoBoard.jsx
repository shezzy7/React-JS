import { useState } from "react";
export default function LudoBoard(){
    // In this simple activity , we'll deal with how to pass objects as our state variable and how to deal while changing it values.
    let [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0});

    let handleRed = ()=>{
        setMoves((moves)=>{ {/* We know that when new value depends upon previous value then we use callback to update our state variable */}
            // We can simply update value of red by writing ' moves.red+=1; ' but this will only change value of red key in moves object.And our state will remain same ,bcz its focusing on whole variable moves which does not go from any change ,only its inner coontent is changed so nothing will be re-rendered.So to change our object we will make a copy of it by using spread operator (...) .Which will do nothing but will change position of moves variable in memory.And in result a change will be detected in state variable which will lead to re-rendering.And with this we'll also have to update value of key =>(red:moves.red+1).
            return {...moves,red:moves.red+1};
        })
    }
    let handlYellow = ()=>{
        setMoves((moves)=>{
            return {...moves,yellow:moves.yellow+1};
        })
    }

    let handleBlue = ()=>{
        setMoves((moves)=>{
            return {...moves,blue:moves.blue+1};
        })
    }

    let handleGreen = ()=>{
        setMoves((moves)=>{
            return {...moves,green:moves.green+1};
        })
    }
    return(
        <>
            <h1>Ludo Board</h1>
            <p>Red Count = {moves.red}</p>
            <button onClick={handleRed} style={{backgroundColor:"red"}}>+1</button>
            <p>Yellow Count = {moves.yellow}</p>
            <button style={{backgroundColor:"yellow" , color:"black"} } onClick={handlYellow}>+1 </button>
            <p>Green Count = {moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={handleGreen}>+1</button>
            <p>Blue Count = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={handleBlue}>+1</button>

        </>
    );
    
}