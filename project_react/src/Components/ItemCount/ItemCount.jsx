import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) =>{
    const [ quantity, setQuantity] = useState(initial)

    const increase = ()=> {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

const decrease = ()=> {
    if(quantity > 1){
        setQuantity(quantity-1)
    }
}
return(
    <div className='Counter'>
        <div className='Controls'>
            <button className='Button' onClick={decrease}>➖</button>
            <h4 className='Number'>{quantity}</h4>
            <button className='Button' onClick={increase}>➕</button>
        </div>
    <div>
        <button className='Button' onClick={()=> onAdd(quantity)} disabled={!stock}>
            Add to Cart
        </button>
    </div>
    </div>
)
}

export default ItemCount