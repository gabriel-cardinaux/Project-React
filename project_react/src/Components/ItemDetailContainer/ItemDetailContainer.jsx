import { useEffect, useState } from "react"
import { getProductByid } from '../../data'
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    useEffect(() =>{
        getPorductByid('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])
  return (
    <div className="ItemDetailContainer">
    <ItemDetail {...product}/>
    </div>
  )
}
export default ItemDetailContainer