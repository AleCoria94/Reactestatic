import {collection, getDocs, addDoc,doc} from 'firebase/firestore'
import { useState } from 'react';
import db from '../service/firebase'

 const useFireStore = () =>{
     const[items,setItems] = useState ([])
     const [load, setLoad] = useState(false)
     const [individual, setIndividual] = useState({})
        const getData = async ()=>{
            try {
            const data = collection(db,"items");
            const col = await getDocs(data)
            const result = col.docs.map(
                (doc)=>(doc={id:doc.id, ...doc.data() })
                );
            setItems(result);
            setLoad(false)
         } catch (error){
             console.log(error);
            }
        };

const getIndividualData = async({id})=>{
    setLoad(true);
        try{
            const document = doc(db,"items",id);
            const response = await getDocs(document);
            const resultado = {id:response.id, ...response.data()};
            setIndividual (resultado);
            setLoad(false);
        } catch(error){
            console.log(error);
            setLoad(false);
        }
        };

    const generateOrder = async ({datos}) =>{
        setLoad(true);
            try{
                const col = collection(db,"orders");
                const order = await addDoc(col,datos);
                setLoad(false);
                alert(order.id)
            } catch(error){
                console.log(error);
                setLoad(false);
            }
    };

     return{
         getData,
         getIndividualData,
         generateOrder,
         items,
         load,
         individual,
         
     };
 };

 export default useFireStore;