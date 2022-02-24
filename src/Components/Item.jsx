import React from "react"
import './Item.css'

function Item ({item}){
        return <>

<div className="card d-flex justify-content-around">

    <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <img src={item.img} className="card-img-top" width="100px"></img>
        <p class="card-text">$ {item.price} </p>
          <a href="/item/:id" className="btn btn-primary btn-sm">Ver Detalle</a>
          <a href="/cart" className="btn btn-primary btn-sm">Agregar al carrito</a>
  </div>
  </div>
        </>
         }
export default Item;