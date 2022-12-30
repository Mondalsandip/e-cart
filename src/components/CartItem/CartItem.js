import React from 'react'
import { useDispatch } from 'react-redux'
import './CartItem.css'
import { cartAction } from '../../reducers/cart-reducer'

const CartItem = (props) => {
    const {id,title,price, image,totalPrice,quantity }=props.item
    const dispatch= useDispatch()

    const handleIncrease =()=>{
      dispatch(cartAction.addItem(props.item))


    }
    const handleDecrease =()=>{
      dispatch(cartAction.removeItem(id))
    }




  return (
<div className="cartItem">
      <img src={image}></img>
      <p>{title}</p>
      <div className='item-price'>
      <p>Price: {totalPrice.toFixed(2)}$   ({price.toFixed(2)}$ /item)</p>
      <p>Quantity:{quantity} </p>

      <div className='add-btn'>
        <button type='button' className='btn-in' onClick={handleDecrease} > - </button>
        <button type='button' className='btn-de' onClick={handleIncrease} > + </button>
      </div>




      </div>
    </div>
  )
}

export default CartItem
