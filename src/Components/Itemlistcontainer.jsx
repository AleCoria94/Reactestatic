import React, { useEffect, useState } from 'react';
import {collection,getDocs} from 'firebase/firestore'
import db from '../service/firebase'
import ItemList from './ItemList';
import Spinner from './Spinner';
import './ItemListContainer.css'
import useFireStore from '../Hooks/useFireStore';

function ItemListContainer({titulo}){

    const [isLoading,setIsLoading] = useState(true)
    const{items,getData} = useFireStore ();

useEffect(()=>{
    
           getData();
        },[]);


    return(
        <div className="container-fluid">
            {isLoading ? <Spinner/>: <ItemList data={items}/>}
        </div>
    )
        
    
}
export default ItemListContainer;