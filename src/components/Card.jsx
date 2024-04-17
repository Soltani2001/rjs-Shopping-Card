import React from 'react'
import { Link } from 'react-router-dom';
import {TbListDetails, TbShoppingBagCheck  } from "react-icons/tb"
import { FaPlus, FaMinus  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { productQuantity, shortenText } from '../helpers/helper';
import styles from './card.module.css'
import { useCart } from '../context/CartContext';

function Card({data}) {
    const {image, title, price, id} = data;

    const [state, dispatch] =useCart();
    const clickHandeler =(type)=>{
      dispatch({type, payload: data})
    }

    const quantity =productQuantity(state, id)
  return (
  <>
  <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}><TbListDetails /></Link>
            {quantity === 1 && <button onClick={()=>clickHandeler("REMOVE_ITEM")}><MdDelete /></button>}
            {quantity > 1 &&  
            <button onClick={()=>clickHandeler("DECREASE")}>< FaMinus /></button>}
            {!!quantity  &&<span>{quantity}</span> }
            {
              quantity === 0 ? <button onClick={()=>clickHandeler("ADD_ITEM")}><TbShoppingBagCheck /></button> : <button onClick={()=>clickHandeler("INCREASE")}>< FaPlus /></button>
            }
            
            
        
        
        
        </div>
    </div>
  </>
    
  )
}

export default Card