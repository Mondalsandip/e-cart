import React, { useEffect, useState } from 'react'
import './Cart.css'
import Header from '../../components/Shared/Header/Header'
import Footer from '../../components/Shared/Footer/Footer'
import CartItem from '../../components/CartItem/CartItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { showAction } from '../../reducers/show-reducer'
const Cart = () => {
    // const [items,setItems]= useState([])
    // useEffect(()=>{
    //     let items= localStorage.getItem('cartItems')
    //     if(items){
    //         items=JSON.parse(items)
    //         setItems(items)
    //     }

    // },[])

    const cartItem= useSelector(arg => arg.cart.value)
    const totalAmount= useSelector(arg => arg.cart.totalAmount)
    const dispatch= useDispatch()




  return (
    <div>
        <Header      /> 
        {  cartItem.length >0 ? <h2>Total Price: {totalAmount.toFixed(2)}$</h2> : <div><h2>No Item In Cart</h2> <button onClick={()=> dispatch(showAction.toggle())} >Continue Shopping</button> </div>  }
        <div>
            {cartItem .map((item,i)=>(
                <CartItem key={i} item={item}    />
            ))}


        </div>
        <Footer/>

      
    </div>
  )
}

export default Cart
