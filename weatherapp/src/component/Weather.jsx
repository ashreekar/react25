import { useEffect, useState } from "react";
import Search from "./Search";

export default function Weather() {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [err, setErr] = useState(null);

    async function fetchWeather(param) {
        setLoading(true)
        try {
            
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=b874179f1b2c1ec026bff4eb0777ce2b`);
            const data = await res.json();
            if (data) {
                setLoading(false);
                setWeather(data);
            }
        } catch (err) {
            setErr(err)
            // setWeather({})
            setLoading(false);
        }
    }

    async function handleSearch() {
        fetchWeather(search)
    }

    useEffect(()=>{
        fetchWeather("Bengaluru");
    },[])

    function getCurrentDate(){
        return new Date().toLocaleDateString("en-us",{
            weekday:"long",
            month:"long",
            day:"numeric",
            year:"numeric"
        })
    }

    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch} />

        {
            loading?
            <p className="loaing">Loading...</p>:
            // err?
            // // <p>Error...</p> 
            // null:
            <div>
               <div className="city-naem">
                <h2>{weather?.name}, <span>{weather?.sys.country}</span></h2>
               </div>

               <div className="date">
                <span>{getCurrentDate()}</span>
               </div>

               <div className="temperature">
                {weather?.main.temp}
               </div>

               <p className="desc">{weather?.weather[0].description}</p>

               <div className="weather-info">
                <div className="column">
                    <div>
                        <p className="wind">{weather?.wind.speed}</p>
                        <p>Wind speed</p>
                    </div>
                </div>
                <div className="column">
                      <div>
                        <p className="humidity">{weather?.main.humidity} %</p>
                        <p>Humidity</p>
                    </div>
                </div>
               </div>
            </div>
        }

        </div>
    )
}