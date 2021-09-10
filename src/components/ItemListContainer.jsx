import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer =({greeting})=>{

    const onAdd = (cant)=>{
        console.log(cant)
    }
    return ( 
        <div>   
             <h1> {greeting}</h1>
             <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
       
   
    

}
export default ItemListContainer