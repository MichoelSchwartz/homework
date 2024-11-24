import './App.css'
import Address from './address';

function App() {

  const theJSX = (
    <>
      <h2>Here is an address!!</h2>
      <Address street="617 Private Way" city="Lakewood" state="NJ" zip="08701" />
    </>
  );

  console.dir(theJSX);

  return theJSX;
}

export default App
