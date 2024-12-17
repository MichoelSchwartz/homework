import { Outlet } from 'react-router';
import './App.css';
import Header from './Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
    </div>
  )
}

export default App
