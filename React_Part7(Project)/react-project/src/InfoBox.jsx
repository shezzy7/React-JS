import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}) {

    const HOT_URL="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1480775661506-541bb9d526b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";
    // icons
    
    return (
        <div className="infoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 550 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 ? RAINY_URL
                        : (info.temp>15)? HOT_URL
                        : COLD_URL
                        
                    }   

                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}  &nbsp;
                        {
                            info.humidity>80? <ThunderstormIcon />
                            : (info.temp>15)? <WbSunnyIcon />
                            : <AcUnitIcon />
                        }
                        <p>{info.country}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Min-Temp = {info.tempMin}&deg;C</p>
                        <p>Mix-Temp = {info.tempMax}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>The weather feels like {info.feelsLike}&deg;C</p>
                        
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}