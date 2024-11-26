/* eslint-disable react/prop-types */
export default function Weather(props) {
  console.log(props);
  const location = props.weather.weather.name;
  const temp = props.weather.weather.main.temp;
  const description = props.weather.weather.weather[0].description;

  return (
    <>
      <h2>{location}</h2>
      <h2>{temp}</h2>
      <h2>{description}</h2>
    </>
  )
}


