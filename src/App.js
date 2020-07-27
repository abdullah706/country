import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  state = {
    name: '',
    capital: '',
    flag: '',
    population: 0,
    region: '',
    flag: ''
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/france', { method: 'GET'} )
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          region: json[0].region,
          population: json[0].population,
          flag: json[0].flag
        })
      })
  }

  render() {
    return (
      <div className="container">
        <img src={this.state.flag} style={{height: '100px', width: '150px'}}/>
        <p>Country: {this.state.name}</p>
        <p>Capital: {this.state.capital}</p>
        <p>Region: {this.state.region}</p>
        <p>Population: {this.state.population}</p>
      </div>
    )
  }

}

export default App;
