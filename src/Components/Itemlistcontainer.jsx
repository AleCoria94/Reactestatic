import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer({titulo}){

    const array= [
                        {
                            id:1,
                            name:"Silla Frolic",
                            stock:4,
                            price:8501,
                            category:"sillas",
                            img:"https://www.alfaventas.com/imgs/productos/productos34_4271.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                                id:2,
                                name:"Silla Swan",
                                stock:6,
                                price:9666,
                                category:"sillas",
                                img:"https://www.alfaventas.com/imgs/productos/productos34_4271.jpg",
                                description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:3,
                                name:"Silla Telix",
                                stock:1,
                                price:23457,
                                category:"sillas",
                                img:"https://www.alfaventas.com/imgs/productos/productos34_4271.jpg",
                                description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." 
                        },
                        {
                            id:4,
                            name:"Silla Xenu",
                            stock:9,
                            price:190203,
                            category:"sillas",
                            img:"https://www.alfaventas.com/imgs/productos/productos34_4271.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        },
                        {
                            id:5,
                            name:"Sillón Arman",
                            stock:6,
                            price:18203,
                            category:"sillas",
                            img:"https://www.alfaventas.com/imgs/productos/productos34_4271.jpg",
                            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        }
    ];

    const [data,setData] = useState(null);

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
        },[]);

    return(
        <div className="container-fluid border border-primary">
            <h1>{titulo}</h1>
            <ItemList items={data}/>
        </div>
    )
        
    
}
export default ItemListContainer;