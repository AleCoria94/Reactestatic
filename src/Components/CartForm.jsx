import react from "react";
import React,{useState} from 'react'
import useCartContext from "../context/CartContext"

function CartForm () {

    const {itemsInCart} = useCartContext();
    const [buyer,setBuyer] = useState({
        name:'',
        phone:'',
        email:''
    });

    function handleInput(evt){
const target=event.target;
const value= target.value;
const name= target.name;
    
setBuyer({
    ...buyer,[nameInp]:value
})
}

function handleSubmit(event){
    event.preventDefault();
    /*reveer esto*/
}

    return(
        <div>

        
        <div> Ingresa los datos para terminar la compra</div>
        <form>
            <div>
                <label for="buyer-name">Nombre y Apellido</label>
                <input onChange = {handleInput} value={buyer.name} type="text" name="buyer-name"></input>
            </div>
            <div>
                <label for="phone">Nombre y Apellido</label>
                <input onChange = {handleInput} value={buyer.phone} type="text" name="phone-name"></input>
            </div>
            <div>
                <label for="email">Nombre y Apellido</label>
                <input onChange = {handleInput} value={buyer.email} type="text" name="email-name"></input>
            </div>
            <button className="btn btn-success">Finalizar</button>
            <button className="btn btn-danger">Cancelar</button>
        </form>
        
        </div>
    )
}

export default CartForm

