import React from "react"

const Item = ({agenda}) =>{
    return (
        <div key={agenda.id} className='card w-40 mt-3'>
        <div className= 'card-header'>{agenda.name}</div>
        <div className= 'card-body'>
            <img src={agenda.foto} />
            </div>
            <div className= 'card-footer'>
            <button className="btn btn-outline-primary btn-block" onClick={()=>setLoading(!loading)}>Detalles</button>
            </div>
            </div>


    )
}

export default Item