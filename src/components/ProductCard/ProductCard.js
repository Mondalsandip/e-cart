import React from 'react'
import './ProductCard.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../reducers/cart-reducer'


const ProductCard = (props) => {

    const {id,title, price,description,image} =props.item
    const dispatch = useDispatch()
    

    const handleAddToCartEvent=()=>{
        // console.log('clicked')
        // let cartItems= localStorage.getItem('cartItems')
        // if(!cartItems){
        //     cartItems=[]
            
        // }else{
        //     cartItems =JSON.parse(cartItems)
        // }
        // cartItems.push(props.item)
        // localStorage.setItem('cartItems', JSON.stringify(cartItems))

        // props.notify(cartItems.length)
        dispatch(cartAction.addItem(props.item))



    }
  return (
    <div>
        <div className="card card-main">
        <h5 className="card-title">{title}</h5>
    <hr />
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h6>{price}</h6>
    <p className="card-text">{description}</p>
    <a className="btn btn-success" onClick={handleAddToCartEvent} >Add To Cart</a>
  </div>
</div>


    </div>

  )
}

export default ProductCard
