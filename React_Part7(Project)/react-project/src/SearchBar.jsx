import "./searchBar.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBar(){
    let [city,setCity] = useState("");
    let API_URL = "http://api.openweathermap.org/geo/1.0/direct"; 
    let API_Key = "9a647e08b4c5bcaa0ee29e1d26365890";
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async(event)=>{
        event.preventDefault();
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setCity("");
    }
    return(
        <form onSubmit={handleSubmit} >
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br /> <br />
         <Button variant="contained" type='submit'>Search</Button>
      </form>
    )
} 