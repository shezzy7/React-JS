import "./searchBar.css";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBar({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    let API_Key = "9a647e08b4c5bcaa0ee29e1d26365890";
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async(event)=>{
        event.preventDefault();
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
        let jsonResponse = await response.json();
        setCity("");
        console.log(jsonResponse);
        let result = {
            feelsLike:jsonResponse.main.feels_like,
            temp:jsonResponse.main.temp,
            tempMax:jsonResponse.main.temp_max,
            tempMin:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            city:jsonResponse.name,
            country:jsonResponse.sys.country
        };
        updateInfo(result);
        setError(false);
        }
        catch(eror){
            setError(true);
        }
    }
    return(
        <form onSubmit={handleSubmit} >
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br /> <br />
         <Button variant="contained" type='submit'>Search</Button>
         <br /> <br />
         {error && <Alert severity="error">No Such Place Found In Our API</Alert>}
         
      
      </form>
    )
} 