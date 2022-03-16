import React, { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import useFireStore from '../Hooks/useFireStore';

function ItemListContainer({titulo}){
    const {id} = useParams()
    const{individual,getIndividualData} = useFireStore();

    useEffect(()=>{
        getIndividualData({id});
            
        },[]);
    return(
        <div className="container-fluid border border-primary">
            <h1>{titulo}</h1>
            <ItemDetail item={individual}/>
        </div>
    )


}
export default ItemListContainer;