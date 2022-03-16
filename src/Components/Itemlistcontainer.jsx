import React, { useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import useFireStore from '../Hooks/useFireStore';

function ItemListContainer({titulo}){
    const{items,getData} = useFireStore ();

useEffect(()=>{
    
           getData();
        },[]);


    return(
        <div className="container-fluid">
            <ItemList data={items}/>
        </div>
    )
        
    
}
export default ItemListContainer;