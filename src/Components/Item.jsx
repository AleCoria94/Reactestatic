import React from "react"
import './Item.css'

function Item ({item}){
        return <>

<div className="card d-flex justify-content-around">
<img src={item.img} class="card-img-top" width="100px"></img>
<div className="card-body">
  </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{item.name}</li>
    <li className="list-group-item">Precio: $ {item.price} </li>
        </ul>
  <div className="card-body">
    <a href="#" className="card-link">Ver Detalle</a>
    <a href="#" className="card-link">Agregar al carrito</a>
  </div>
  </div>
        </>
         }
export default Item;