import {useState, useEffect} from 'react'

import { unArti } from '../util/Mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ()=> {
    const [Articulo, setArticulo]= useState({})

    useEffect(()=> {
        unArti
        .then(result => setArticulo(result))

    },[])
    return (
        <div>
            <ItemDetail Articulo={Articulo}/>
        </div>
    )
}

export default ItemDetailContainer