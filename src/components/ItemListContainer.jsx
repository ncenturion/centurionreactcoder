import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import Item from './Item'
import  getFetch  from '../util/Mock'
import ItemList from './ItemList'

const ItemListContainer =({greeting})=>{
    const [agenda, setAgenda]= useState([])
    const [loading, setLoading]= useState(true)

    const onAdd = (cant)=>{
        console.log(cant)
    }

    useEffect(() => {
        getFetch
        .then(respuesta =>{
            setAgenda(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [])


    return ( 
        <div>   
             <h1> {greeting}</h1>
             { loading ? <h2> Cargando...</h2> : <ItemList agendas={personas}/>}
             <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
       
   
    

}
export default ItemListContainer