import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from '../Components/ItemDetailContainer'
import Cart from '../Components/Cart'
import Checkout from '../Components/Checkout'
import ItemListContainer from '../Components/ItemDetailContainer';

const Rutas = () =>{
    return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/cart/checkout' element={<Checkout/>}/>
            <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default Rutas