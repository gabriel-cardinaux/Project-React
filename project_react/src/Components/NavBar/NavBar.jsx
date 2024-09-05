import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


export default function NavBar() {
    return (
      <>
      <nav className='NavBar'>
        <h1><Link to="/">E-Store</Link></h1>
        <ul>
            <li><Link to="/category/PC">PC</Link></li>
            <li><Link to="/category/Accesories">Accesories</Link></li>
            <li><Link to="/category/Others">Others</Link></li>
        </ul>
        <CartWidget/>
      </nav>
      </>
    )
};

