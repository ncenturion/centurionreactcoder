import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({Articulo}) => {

    const [CantArti, setCantArti] = useState(0)

    const onAdd = (cant)=>{
        console.log(cant)
        setCantArti(cant)
    }
    return(
        <>
            <h2>{Articulo.id}</h2>
            <h2>{Articulo.name}</h2>
            <h2>{Articulo.color}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>

        </>    
    )
}

export default ItemDetail