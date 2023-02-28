
import React from "react"
import CartProvider from "../../store/CartProvider"


import filmImage from "./../asset/film.jpg"

function UserItem(props){

 

 
  return <CartProvider >
           <img src={filmImage} alt='Movies Top' /> 
        </CartProvider>
}
        
        
export default UserItem