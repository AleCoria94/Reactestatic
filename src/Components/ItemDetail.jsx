import React from "react"

function ItemDetail ({item}){
        return <>

<div class="card-body">
    <h5 class="card-title">Aquí comienza cada componente</h5>
  </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">{item.name}</li>
    <li class="list-group-item">Stock:{item.stock}</li>
    <li class="list-group-item">Precio: $ {item.price} </li>
    <li class="list-group-item">Descripcion del producto:{item.description} </li>
        </ul>
            <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>

        </>
         }
export default ItemDetail;