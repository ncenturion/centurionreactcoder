import React, { useState, useContext } from 'react'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemDetail = ({Articulo}) => {

    const [CantArti, setCantArti] = useState(0)

    const onAdd = (cant)=>{
        console.log(cant)
        setCantArti(cant)
    }

    const useContextApp = useContext()
    return(
        <>
            <h2>{Articulo.id}</h2>
            <h2>{Articulo.name}</h2>
            <h2>{Articulo.color}</h2>
            <h2><img src={Articulo.img} alt="" /></h2> 
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>

        </>    
    )
}

export default ItemDetail