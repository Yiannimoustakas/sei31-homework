import React, { Component } from 'react';
import axios from 'axios';

class WeatherSearch extends Component {
  constructor() {
    super();
    this.state = { weatherData: null };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(city) {
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherParams = {
      q: city,
      units: 'metric',
      appid: '44a1bbb22939eb026aefba9df5a6ee6c'
  };

  axios.get(weatherURL, {params: weatherParams}).then(
    (result) => {
    this.setState({weatherData: result.data});
   });
  }

  render() {
    return (
      <div>
        <h1>Weather Search !</h1>
        <SearchForm onSubmit={ this.fetchWeather }/>
        <Display data={ this.state.weatherData }/>
      </div>
    )
  }
}

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {query: ''}
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event){
    this.setState( {query: event.target.value} )
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  render(){
    return(
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Glasgow" onInput={ this._handleInput } />
        <input type="submit" value="Search"/>
      </form>
    )
  };
}

const Display = (props) => {
  // conditional rendering: show nothing until we have the weather info in a prop.
  if (props && props.data === null) {
    return ''; // no results to show yet
  } else {
    return (
      <div>
        <h2>Weather for { props.data.name }</h2>
        <h3>Currently: { props.data.main.temp }&deg;C</h3>
        <h3>Humidity: { props.data.main.humidity }%</h3>
        <h3>Wind Speed: { props.data.wind.speed }m/s</h3>
        <h4>{props.data.weather[0].main}: {props.data.weather[0].description}</h4>
      </div>
    );
  }
};

export default WeatherSearch;
