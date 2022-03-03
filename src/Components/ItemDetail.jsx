import React from "react"
import ItemCount from "./ItemCount"
import useCartContext from '../context/CartContext'

function ItemDetail ({item}){
    let[inCart, setInCart] = React.useState(false);

    const {quantity, addItem,isIncart,getItemInCart} = useCartContext();
    let prueba = getItemInCart(3);
    console.log(prueba)
    console.log('Desde el context',quantity)

function onAdd(contador){
     setInCart(true);
     addItem(item, contador);
}
if(item){
return <>
     
<div className="card-body">
      
    <ul className="list-group list-group-flush">
        <h1 className="list-group-item">{item.name}</h1>
    <li className="list-group-item">¡Quedan {item.stock} unidad/es disponible/s!</li>
    <h1 className="list-group-item"> $ {item.price} </h1>
    <li className="list-group-item">Descripcion del producto:{item.description} </li>
        </ul>
            <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
  </div>
        
    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </>
        }else{
            <div>
                <h3>Estamos tatando de traer los productos</h3>
            </div>
        }
         }
export default ItemDetail;
