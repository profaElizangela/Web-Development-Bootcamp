import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

const API_Key = "95f71a90bcd55a32f77efb42eaf4a0a5";

app.get("/", (req, res) => {
    res.render("index.ejs", { weather:null })
});

app.post("/", async (req, res) => {
    const cityName = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`; 
    
    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        console.log(weatherData)

        const weather = {
            city: weatherData.name,
            temp: weatherData.main.temp,
            humidity: weatherData.main.humidity,
            description: weatherData.weather[0].description,
            rainChance: weatherData.weather[0].main == "Rain",
        }
        res.render("index.ejs", {
            weather
        });
    } catch (error) {
        
    }
    
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
