import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBar from "./SearchBar";

export default function WheatherApp(){
    let [info,setInfo] = useState({
        city:"",
        temp:0,
        minTemp:"",
        maxTemp:"",
        humidity:0,
        feelsLike:"",
        desc:"",
        country:""
    })
    
    let updateInfo = (result)=>{
        setInfo(result);
    }
    return(
        <div>
            <h2>Whether App</h2>
            <SearchBar updateInfo={updateInfo}/>
            <InfoBox info={info}/>
        </div>
    )
}