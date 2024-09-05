import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                price: ${price}
            </p>
            <p className="Info">
                Stock: {stock}
            </p>
        </section>
        <footer className="ItemFooter">
            <button className="Option">Details</button>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Added')}/>
        </footer>
    </article>
  )
}
export default ItemDetail