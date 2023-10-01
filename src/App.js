import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BiSearch} from 'react-icons/bi';
import {PiWavesThin} from 'react-icons/pi';
import {PiWindThin} from 'react-icons/pi';
import sunny from './img/sunny.png';
import cloudy from './img/cloudy.png';
import snow from './img/snow.png';
import partlyCloudy from './img/partly-cloudy.png';
import storm from './img/storm.png';
import tornado from './img/tornado.png';
import strongWind from './img/strong-wind.png';
import rain from './img/rain.png';

function App() {
  return (
    <div className="App">
      <div className='container-fluid min-vh-100 text-center d-flex justify-content-center align-items-center'> 

        <div className='card box f-flex justify-content-center rounded-5'> 
         <div className='row-sm p-2'> 
            <div className="input-group mb-3 d-flex justify-content-center">
               <form className='d-flex grid gap-3 w-75'>
                  <input type="text" className="form-control rounded-5" placeholder="Search">
                  </input>
                 <div className="searchIcon rounded-5 d-flex align-items-center justify-content-center">  <BiSearch color='gray'/> </div>
              </form>
            </div>
          </div>


      <div className='row-sm d-grid gap-3'> 


        <div className='row-sm'> 
          <img className="img" src={tornado} alt='weather'/>
        </div>


        <div className='row-sm info'> 
           <h1 className='display-4 fw-normal'> 24° C </h1> 
           <h2 className='display-6 fw-normal'> London </h2>
        </div>
      </div>



      <div className='row-sm d-flex gap-3 justify-content-center grid gap-5'>  
          <div className='detailLeft d-flex align-items-center'>  
            <div className='humidityIcon'> <PiWavesThin size={40}/>  </div>
            <div className='humidity d-flex flex-column lh-sm'> <span> 74 %</span> <span> Humidity </span> </div>

          </div>
          <div className='detailRight d-flex align-items-center'>  
            <div className='windSpeedIcon'> <PiWindThin size={40}/></div>
            <div className='windSpeed d-flex flex-column lh-sm'> <span> 5.66 km/h </span> <span> Wind Speed </span> </div>
          </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
