import React from 'react'
import useCartContext from "../context/CartContext"
import {Link} from 'react-router-dom'
import CartForm from './CartForm'

function CartView (){
        const {itemsInCart, ClearCart} = useCartContext();
            //falta table//
        if (itemsInCart.length === 0){
            <div className='container'>
                <h2>No hay elementos en el carrito</h2>
                <p>Probandoooooo</p>
                <Link to='/'>Volver al catalogo</Link>

            </div>}else{
                
                return(
                    <div className='container'>
                        <table className='table'>

                        </table>
                        <button onClick={()=> {alert("la compra fue realizada")}} className="btn btn-success mx-2" >Pagar</button>
                        <button onclick={ClearCart} className="btn btn-danger">Vaciar Carrito</button>
                        <CartForm/>
                    </div>
                )
            }
        }


export default CartView