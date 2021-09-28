import React from "react"
import { Link } from "react-router-dom";

const Item = ({agenda}) =>{
    return (
        <div key={agenda.id} className='card w-40 mt-3' >
        <div className= 'card-header'>{agenda.name}</div>
        <div className= 'card-body'>
            <img src={agenda.img} alt=""/>
            </div>
            <div className= 'card-footer'>
                <Link to= {`/detalle/${agenda.id}`}>
                    <button className="btn btn-outline-primary btn-block" >Detalles</button>    
                </Link>
            
            </div>
            </div>


    )   
}

export default Item