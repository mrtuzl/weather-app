import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BiSearch} from 'react-icons/bi';
import {PiWavesThin} from 'react-icons/pi';
import {PiWindThin} from 'react-icons/pi';
import sunny from './img/sunny.png';
import cloudy from './img/cloudy.png';
import snow from './img/snow.png';
import storm from './img/storm.png';
import tornado from './img/tornado.png';
import rain from './img/rain.png';
import haze from './img/haze.png';
import { useState } from 'react';

function App() {

  const[search, setSearch] = useState(null);
  const[weather, setWeather] = useState({});
  const[weatherImg, setWeatherImg] = useState({});
  const[country, setCountry] = useState({});
  const[error, setError] = useState("");

  const api = {
    key: "ffa2429458b9214e4910cccf2b824180",
    base: "https://api.openweathermap.org/data/2.5/",
  }
  const searchClick = () => {

    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      if (result.cod === "404") {
            setError(result.message);
            setCountry({});
            setWeatherImg({});
            setWeather({});
      } else {
            setError("");
            setWeather(result);
            setWeatherImg(result.weather[0]);
            setCountry(result.sys.country);
      }
    });
  };

  return (
    <div className="App">
      <div className='container-fluid min-vh-100 text-center d-flex justify-content-center align-items-center'> 
        <div className='card box f-flex justify-content-center rounded-5 shadow-lg'> 
         <div className='row-sm p-2'> 
            <div className="input-group d-flex justify-content-center ">
            <h5 className= {`p-3 m-0 text-uppercase ${Object.keys(weather).length !== 0 ? "d-none": "d-block"}`}> weather app</h5>
               <form className='d-flex grid gap-3 w-75'>
                  <input type="text" 
                  className="form-control rounded-5 shadow-lg" 
                  placeholder="Search"
                  onChange={(e) => {setSearch(e.target.value)}}
                  >
                  </input>
                 <div className="searchIcon rounded-5 d-flex align-items-center justify-content-center shadow-lg"
                 onClick={searchClick}
                 >  
                 <BiSearch color='gray'/> 
                 </div>
              </form>
            </div>
          </div>
      <div className={`row-sm d-grid gap-3 p-2 ${Object.keys(weather).length === 0 ? "d-none": "d-block"}`}> 
        <div className='row-sm'> 
          <img className="img" src={
            weatherImg.main === "Clouds" ? cloudy : 
            weatherImg.main === "Rain" ? rain : 
            weatherImg.main === "Drizzle" ? rain : 
            weatherImg.main === "Snow" ? snow : 
            weatherImg.main === "Tornado" ? tornado :
            weatherImg.main === "Clear" ? sunny :
            weatherImg.main === "Haze" ? haze :
            weatherImg.main === "Mist" ? haze :
            weatherImg.main === "Fog" ? haze :
            weatherImg.main === "Thunderstorm" ? storm : ""} alt='weather'/>
        </div>
        <div className= {`row-sm info ${Object.keys(weather).length === 0 ? "d-none": "d-block"}`}> 
           <p className='fs-3 fw-normal text-capitalize'>  { typeof weather.main != "undefined" ? `${weatherImg.description}` : ""} </p>
           <h1 className='display-4 fw-normal'> { typeof weather.main != "undefined" ? `${weather.main.temp_max} °C` : ""}  </h1> 
           <h2 className={`display-6 fw-normal text-capitalize ${error === "" ? "d-block" : "d-none" }`}> {weather.name + ", " + country}</h2>
           <h2 className={`display-6 fw-normal text-capitalize ${ error === "city not found" ? "d-block" : "d-none"}`}> {error} </h2>
        </div>
      </div>
      <div className={`row-sm d-flex gap-3 justify-content-center grid gap-5 ${Object.keys(weather).length === 0 ? "d-none": "d-block"}`}>  
          <div className='detailLeft d-flex align-items-center'>  
            <div className='humidityIcon'> <PiWavesThin size={40}/>  </div>
            <div className='humidity d-flex flex-column lh-sm'> <span> { typeof weather.main != "undefined" ? `${weather.main.humidity}` : "-"} %</span> <span> Humidity </span> </div>
          </div>
          <div className='detailRight d-flex align-items-center'>  
            <div className='windSpeedIcon'> <PiWindThin size={40}/></div>
            <div className='windSpeed d-flex flex-column lh-sm'> <span> { typeof weather.main != "undefined" ? `${weather.wind.speed}` : "-"} km/h </span> <span> Wind Speed </span> </div>
          </div>
      </div>
          {error === "" ?  <h5 className= {`p-3 m-0 text-uppercase ${Object.keys(weather).length !== 0 ? "d-none": "d-block"}`}> please enter a city name</h5>: <h5 className='p-3 m-0 text-uppercase'> {error} </h5>}
      </div>
      </div>
    </div>
  );
}

export default App;
