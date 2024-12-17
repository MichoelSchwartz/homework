import './Navbar.jsx';
import './Navbar.css';
import { NavLink } from 'react-router';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li> |{' '}
                <li><NavLink to="/BuyHomes">Buy Homes</NavLink></li> |{' '}
                <li><NavLink to="/SellHomes">Sell Homes</NavLink></li>
            </ul>
        </nav>
    )
}