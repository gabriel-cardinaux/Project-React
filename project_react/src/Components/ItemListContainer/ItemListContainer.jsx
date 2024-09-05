import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../data"

export default function ItemlistContainer ({greeting}) {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])

    return <>
    <h1>{greeting}</h1>
    <ItemList products={products}/>
    </>
}

