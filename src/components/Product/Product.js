import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
   // console.log(props)
  const {name,img,price,seller,stock} = props.pd;
  const element = <FontAwesomeIcon icon={faCoffee} />

   return (
      <div className = 'product'>
        <div>
        <img src={img} alt="" />
        </div>
        <div >
        <h3 className = "product-name">{name}</h3>
        <p>By: {seller}</p>
        <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        <button 
        onClick = {() => props.handleAddToCart(props.pd)}
        className="regular-button">
           
           add to cart</button>
        </div>
      </div>
   );
};

export default Product;