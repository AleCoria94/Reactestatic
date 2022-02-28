import React,{useState} from "react"

function ItemCount ({stock,initial}) {

    const [contador,setContador] = useState(1)
    const onAdd = ()=>{
        contador < stock ? setContador(contador+1):setContador(contador)
    }
    const onLess =()=>{
        contador > 0 ? setContador(contador-1):setContador(contador)
    }    
return <>
    <div class="container-fluid">
    <button className="btn btn-primary" onClick={onAdd}>+</button>
    <h1 className="contador">{contador}</h1>
    <button className="btn btn-primary" onClick={onLess}>-</button>
</div>
    
    </>  
};

export default ItemCount;