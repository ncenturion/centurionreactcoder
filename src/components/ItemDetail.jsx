import React from 'react'

const ItemDetail = ({Articulo}) => {
    return(
        <>
            <h2>{Articulo.id}</h2>
            <h2>{Articulo.name}</h2>
            <h2>{Articulo.color}</h2>

        </>    
    )
}

export default ItemDetail