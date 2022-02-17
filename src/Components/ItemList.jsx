import React from 'react'

import ItemDetail from './ItemDetail'

export default function ItemList({items}){
    return (
        <div className="row">
            {items ? items.map((item) => (
                    <ItemDetail key = {item.id} item = {item}/>
            )) : <div className= "container bg-light"><h1>Cargando...</h1></div>
            }
        </div>
    )
}