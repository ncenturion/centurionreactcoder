import { useState, createContext, useContext } from 'react'


const cartContext= createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [cartList, setcartList] = useState ([])
    
    function addToCart(item){
            setcartList([...cartList, item])
    }
    function limpiarLista(item){
        cartList([])
}

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            limpiarLista

        }}>
            {children}
        </cartContext.Provider>
    )
}