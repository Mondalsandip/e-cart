import './Home.css'

import React, { useState,useEffect } from 'react'
import Header from '../../components/Shared/Header/Header'
import Footer from '../../components/Shared/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = (props) => {

    const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [count,setCount]=useState()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setProducts(jsonResponse);
        setError();
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  




  return (
    <div>

<Header   className='container mt-3'  />
{error && <h2 className="mt-3">No Products to Show</h2>}
<div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-md-3">
              <ProductCard 
              item={p} 
              key={i}
              
              
              />
            </div>
          ))}
        </div>
<Footer/>

    
    </div>
  )
}

export default Home
