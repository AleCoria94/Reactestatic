import React from "react"
import ItemCount from "./ItemCount"

function ItemDetail ({items,stock,initial}){
        return <>

<div className="card-body">
    <h5 className="card-title">Aquí comienza cada componente</h5>
  </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{items.name}</li>
    <li className="list-group-item">Stock:{items.stock}</li>
    <li className="list-group-item">Precio: $ {items.price} </li>
    <li className="list-group-item">Descripcion del producto:{items.description} </li>
        </ul>
            <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
    <ItemCount/>
        </>
         }
export default ItemDetail;
