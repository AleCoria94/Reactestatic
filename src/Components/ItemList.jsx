import React from 'react'
import Item from './Item'

export default function ItemList({data}){
    return <>
    <div className="row">
            {data ? data.map((item) => (
                    <Item key = {item.id} item = {item}/>
            )) : <div className= "container bg-light"><h1>Cargando...</h1></div>
            }
        </div>
    </>
}