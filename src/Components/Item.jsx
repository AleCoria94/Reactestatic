import React from "react"

function Item (item){
        return <>

            <div>
                <h2>Id:{item.id}</h2>
                <h2>Nombre:{item.nombre}</h2>
                <h2>Stock:{item.stock}</h2>
            </div>
            </>
            }
export default Item;