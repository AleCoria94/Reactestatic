import React,{useState} from "react"


function ItemCount ({stock,initial,onAdd}) {
    const [contador,setContador] = useState(1)
    const increment = ()=>{
        contador < stock ? setContador(contador+1):setContador(contador)
    }
    const decrement =()=>{
        contador > 0 ? setContador(contador-1):setContador(contador)
    }    
return <>
    <div class="container-fluid">
    <button className="btn btn-primary" type="button" onClick={increment}>+</button>
    <span className="contador">{contador}</span>
    <button className="btn btn-primary" type="button" onClick={decrement}>-</button>
    <button onClick={()=>onAdd(contador)} type="button">Agregar al carrito</button>
</div>
    
    </>  
};

export default ItemCount;