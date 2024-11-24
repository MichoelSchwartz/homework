/* eslint-disable react/prop-types */
export default function Address(props) {
    const { street, city, state, zip } = props;

    return (<h1>{street}, {city}, {state}, {zip}</h1>);
}