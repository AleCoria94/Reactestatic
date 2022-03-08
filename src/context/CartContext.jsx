import React, {createContext, useContext,useState} from 'react'

const CartContext = createContext();
const useCartContext = function(){
    return useContext(CartContext);
}
//<h1>{children}</h1>
//
export const CartContextProvider = ({children}) =>{
        const[itemsInCart, setItemsInCart] = useState([]);

        function addItem(item,qty){
            setItemsInCart([...itemsInCart,{...item,qty}]);
        }

        function isInCart(id){
            let found = itemsInCart.some((item)=>{
                return item.id ===id
            })
                return found;
        }
        function getItemInCart(id){
            let itemInCart = itemsInCart.find((item)=>{
                return item.id ===id
            })
            return itemInCart;
        }
        function removeItemFromCart(id){
            if (isInCart(id)){
                let filterCart = itemsInCart.filter((item)=>{
                return item.id !== id; 
            });
            setItemsInCart(filterCart);
        }

        function clearCart(){
            setItemsInCart([]);
        }
        function countItemsInCart(){
                let total = 0;
                itemsInCart.forEach((item)=>{
                    total += item.qty;
                })
                return total;
            }
            function clearCart(){
                let total = 0;
                itemsInCart.forEach((item)=>{
                    total += item.qty;
                })
                return total;
            }
    }
    return (
    <CartContext.Provider value = { {addItem,countItemsInCart, getItemInCart, isInCart, quantity: 5, itemsInCart}}>
        {children}
        </CartContext.Provider>
    )
}

export default useCartContext