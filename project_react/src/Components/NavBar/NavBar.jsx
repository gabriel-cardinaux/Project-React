import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


export default function NavBar() {
    return (
      <>
      <nav className='NavBar'>
        <h1>E-Store</h1>
        <ul>
            <li><a href="#">PC</a></li>
            <li><a href="#">Accesories</a></li>
            <li><a href="#">Others</a></li>
        </ul>
        <CartWidget/>
      </nav>
      </>
    )
};

