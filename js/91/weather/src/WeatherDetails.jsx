import Proptypes from 'prop-types'

export default function WeatherDetails(props) {
  const { name, temperature, description, icon } = props.weather || {};

  return (
    <div className="row has-weather">
      <div>The weather in {name} </div>
      <img id="icon" src={icon} className="m-auto" />
      <div>{temperature} and {description}</div>
    </div>
  )
}

WeatherDetails.Proptypes = {
  weather:
    Proptypes.shape({
      name: Proptypes.string.isRequired,
      temperature: Proptypes.number.isRequired,
      description: Proptypes.string.isRequired,
      icon: Proptypes.string.isRequired
    }).isRequired
};
