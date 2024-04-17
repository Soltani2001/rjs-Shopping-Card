import { createContext, useEffect, useState, useContext } from "react"
import api from "../services/Config";

const ProductContext = createContext()

function ProductsProvider({children}) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts=async()=>{
      try {
        setProducts(await api.get("/products"))
      } catch(erroe){
        console.log(erroe.message);
      }
    };
    fetchProducts()
  },[])
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

const useProducts = () =>{
  const products = useContext(ProductContext);
  return products;
}

const useProductsDetailes = id =>{
  const products = useContext(ProductContext);
  const result = products.find (item => item.id === id)
  return result ;
}

export default ProductsProvider
export {useProducts, useProductsDetailes}