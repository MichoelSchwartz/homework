import { Component } from 'react'
import Weather from './weather';

export default class App extends Component {
  state = {
    weather: null
  }

  async componentDidMount() {
    const apiKey = '4d940566413cbb48ddbe156f2b502364';
    const zip = '08527';
    try {
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${apiKey}&units=imperial`);
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      const weather = await r.json();
      this.setState({
        weather: weather
      });
    } catch (e) {
      console.error(e);
    }
  }
  
  render() {
    const weatherJsx = this.state.weather ? <Weather weather={this.state}/> : <div>loading...</div>;
    return (
      <div>
        <h2>Here is today&apos;s weather</h2>
        <div>{weatherJsx}</div>
      </div>
    )
  }
}


