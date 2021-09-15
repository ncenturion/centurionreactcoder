import React from 'react'
import Item from './Item'


const ItemList = ({agendas}) => {
    return (
    <>
        {agendas,map(agenda => <Item persona={persona} />
    )}
    </>
    )
    
}
export default ItemList