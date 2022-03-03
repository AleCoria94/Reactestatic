import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Spinner from './Spinner';
import './ItemListContainer.css'

function ItemListContainer({titulo}){

    const array= [
                        {
                            id:1,
                            name:"Silla Frolic",
                            stock:4,
                            price:8501,
                            category:"sillas",
                            img:"https://desillas.com/img/productos/NKXPVE_1.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                                id:2,
                                name:"Silla Swan",
                                stock:6,
                                price:9666,
                                category:"sillas",
                                img:"https://desillas.com/img/productos/torg45.jpg",
                                description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:3,
                                name:"Silla Telix",
                                stock:1,
                                price:23457,
                                category:"sillas",
                                img:"https://desillas.com/img/productos/CQHITO_13.jpg",
                                description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." 
                        },
                        {
                            id:4,
                            name:"Silla Xenu",
                            stock:9,
                            price:190203,
                            category:"sillas",
                            img:"https://desillas.com/img/productos/SSTDNC_1.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:5,
                            name:"Sillón Firer",
                            stock:6,
                            price:18203,
                            category:"sillas",
                            img:"https://desillas.com/img/productos/YBGISL_4.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:6,
                            name:"Sillón Chess",
                            stock:6,
                            price:18203,
                            category:"sillas",
                            img:"https://desillas.com/img/productos/POLPOX_16.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:7,
                            name:"Sillón Gaem",
                            stock:7,
                            price:18203,
                            category:"sillas",
                            img:"https://desillas.com/img/productos/belgium-45.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:8,
                            name:"Sillón Iya",
                            stock:6,
                            price:18203,
                            category:"sillas",
                            img:"https://desillas.com/img/productos/silla-ch23-wegner-negro.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:9,
                            name:"Sillón Iarin",
                            stock:6,
                            price:18203,
                            category:"sillon",
                            img:"https://desillas.com/img/productos/sillonphilippealuminum45.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:10,
                            name:"Sillón Pex",
                            stock:6,
                            price:18203,
                            category:"sillon",
                            img:"https://desillas.com/img/productos/ZGLLNE_3.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
    ];

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true)
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(array);
        },2000);
    });

    const getItem = async ()=>{
        try{
            const data = await promise;
            setData(data);
        } catch (error){
            throw error;
        } finally {
            console.log("la peticion se termino")
        }
    }

useEffect(()=>{
    
            getItem();
            setIsLoading(false);
        },[]);

    return(
        <div className="container-fluid">
            {isLoading ? <Spinner/>: <ItemList items={data}/>}
        </div>
    )
        
    
}
export default ItemListContainer;