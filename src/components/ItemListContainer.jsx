
import  { useEffect, useState } from 'react'
import  { getFetch }  from '../util/Mock'
import ItemCount from './ItemCount'
import ItemList from './ItemList'



const ItemListContainer =({greeting})=>{
    const [agendas, setAgenda]= useState([])
    const [loading, setLoading]= useState(true)

 

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

             { loading ? <h2>Buscando cosas bellas...</h2> : <ItemList agendas={agendas}/>}
            
            
        </div>
    )
       
   
    

}
export default ItemListContainer