import React from "react"
import './Item.css'

function Item ({item}){
        const urlpath = "/item/" + item.id ;
        return <>

        <div className="card d-flex justify-content-around">
                <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <img src={item.img} alt ={item.name} className="card-img-top"width="50%"></img>
                        <p class="card-text">$ {item.price} </p>
                        <a href={urlpath} className="btn btn-primary btn-sm d-flex">Ver Detalle</a>
                 </div>
        </div>
        </>
         }
export default Item;