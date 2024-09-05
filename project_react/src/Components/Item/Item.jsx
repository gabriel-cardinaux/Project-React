const Item = ({id, name, img, price, stock}) => {
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
        </footer>
    </article>
  )
}
export default Item