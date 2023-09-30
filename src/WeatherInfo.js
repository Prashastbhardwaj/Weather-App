function WeatherInfo(props) {
    console.log(props.data)

  
  return (
    
    <div className="WeatherInfo" >
      <header >
     
      <div className="container">
        <div>
          <div className="city">
            <p>{props.data.name ? <h2>City : {props.data.name}</h2> : null}</p>
          </div>
          <div className="temp">
            {props.data.main ?  <h3>Temperature : {props.data.main.temp}°F</h3> : null}
          </div>
          <div className="description">
            {props.data.weather ?<h4>Description :{props.data.weather[0].description}</h4> : null}
          </div>
          <div className="humidity">
            {props.data.main ? <h5>Humidity : {props.data.main.humidity}</h5> : null}
          </div>
          <div className="error">   
            {props.data.message ? <p><b> {props.data.message} !!</b></p> : null}
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default WeatherInfo ;
