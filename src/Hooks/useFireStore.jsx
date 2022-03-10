import {collection,getDocs} from 'firebase/firestore'
import { useState } from 'react';
import db from '../service/firebase'

 const useFireStore = () =>{
     const[items,setItems] = useState ([])
        const getData = async ()=>{
            try {
            const data = collection(db,"items");
            const col = await getDocs(data)
            const result = col.docs.map(
                (doc)=>(doc={id:doc.id, ... doc.data() })
                );
            setItems(result)
         } catch (error){
             console.log(error);
            }
        };
     return{
         getData,items
     }
 }

 export default useFireStore;