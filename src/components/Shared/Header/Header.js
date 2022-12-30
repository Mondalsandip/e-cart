import React, { useEffect, useState } from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { showAction } from '../../../reducers/show-reducer'
import {loginAction} from '../../../reducers/login-reducer'
import Login from '../../../pages/Login/Login'
import Register from '../../../pages/Register/Register'


const Header = () => {

  // const [cartItemCount, setCartItemCount]=useState(0)

  // useEffect(()=>{
  //   let items=localStorage.getItem('cartItems')
    
  //   if(items){
  //     items=JSON.parse(items)
  //     setCartItemCount(items.length)
  //   }




  // },[props.count])
 const cartItemCount= useSelector(arg => arg.cart.totalQuantity)
 const show= useSelector(arg => arg.show.show)
  const dispatch =useDispatch()



const handleRegister=()=>{
  dispatch(loginAction.toggle())
  dispatch(showAction.toggle())

}
 
const handleLogin=()=>{
  dispatch(loginAction.toggle())
  dispatch(showAction.toggle())
  dispatch(loginAction.toggle_login_reg())

}


  return (

    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-lg-top">
  <div className="container-fluid">
    <a className= "navbar-brand icon-container" onClick={ ()=> dispatch(showAction.toggle()) }  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
        <span>E-Cart</span>
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="flex-items  navbar-nav me-auto mb-2 mb-lg-0">

        

<li className="nav-item show-count" onClick={ ()=> dispatch(showAction.toggle())       }>

<a className="btn btn-warning icon-container">

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  className="bi bi-cart"
  viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
</svg>
  
  
  Cart
  { cartItemCount >0 &&   <span className="badge text-bg-primary">{cartItemCount}</span> }
  
  </a>


</li>


         <li className="nav-item show-reg">
          <a className="nav-link active" aria-current="page"  onClick={handleRegister} >Register</a>
        </li> 
      

      

<li className="nav-item show-reg">
<a className="nav-link active" onClick={handleLogin}>Login</a>
</li>

      
        


       
       
        
      </ul>
      
    </div>
  </div>
</nav>
      
    
  )
}

export default Header
