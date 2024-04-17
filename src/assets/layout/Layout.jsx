import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartFill } from "react-icons/pi";
import { useCart } from '../../context/CartContext';
import styles from './Layout.module.css'

function Layout({children}) {
    const  [state] = useCart()
  return (
    <>
        <header className={styles.header}>
            <Link to="/products">DG Shop</Link>
            <div>
            <Link to="/checkout"><PiShoppingCartFill /></Link>
                {state.itemsCounter > 0 && <span>{state.itemsCounter} </span>  }   
            </div>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Morteza</p>
        </footer>
    </>
  )
}

export default Layout