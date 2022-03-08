import React from 'react'
import useCartContext from "../context/CartContext"
import {Link} from 'react-router-dom'

function CartView (){
        const {itemsInCart, removeItemFromCart, ClearCart,countItemsInCart} = useCartContext();
            //falta table//
        if (itemsInCart.length === 0){
            <div className='container'>
                <h2>No hay elementos en el carrito</h2>
                <p>Probandoooooo</p>
                <Link to='/'>Volver al catalogo</Link>

            </div>}else{
                
                <h3>Estoy en el false del if</h3>
            }
        }


export default CartView